<template>
  <div>
    <LuminariesSearch @search="search"/>
    <LuminariesFilters @type="type" />
    <LuminariesList :luminaries-set="searchedLuminaries"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LuminariesList from '@/components/LuminariesList.vue'
import LuminariesSearch from '@/components/LuminariesSearch.vue'
import LuminariesFilters from '@/components/LuminariesFilters.vue' // Import the LuminariesFilters component
import { useLuminariesStore } from "@/store/luminaries";
import Luminary from '@/models/luminary';

const store = useLuminariesStore();

export default defineComponent({
  name: 'Home',
  components: {
    LuminariesList,
    LuminariesSearch,
    LuminariesFilters
},
  data() {
    return {
      isLoading: store.$state.isLoading,
      luminaries: [] as Luminary[],
      luminariesSearched : [] as Luminary[],
      searchString: '',
      filteredType: ''
    }
  },
  async created() {
    const store = useLuminariesStore();
    this.luminaries = store.luminaries;
  },
  methods: {
    search(searchString: string) {
      this.searchString = searchString
    },
    type(filteredType: string) {
      this.filteredType = filteredType
    },
  },
  computed: {
    searchedLuminaries() {
      this.luminariesSearched = this.luminaries.filter((luminary) => {
        return luminary.name.toLowerCase().includes(this.searchString.toLowerCase());
      });
      if (this.filteredType) {
        this.luminariesSearched = this.luminariesSearched.filter((luminary) => {
          return luminary.bodyType === this.filteredType;
        });
      }
      return this.luminariesSearched;
    },
  }
})
</script>