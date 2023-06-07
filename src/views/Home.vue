<template>
  <div>
    <LuminariesSearch @search="search"/>
    <LuminariesList :luminaries-set="searchedLuminaries"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LuminariesList from '@/components/LuminariesList.vue'
import LuminariesSearch from '@/components/LuminariesSearch.vue'
import { useLuminariesStore } from "@/store/luminaries";
import Luminary from '@/models/luminary';

const store = useLuminariesStore();

export default defineComponent({
  name: 'Home',
  components: {
    LuminariesList,
    LuminariesSearch,
  },
  data() {
    return {
      isLoading: store.$state.isLoading,
      luminaries: [] as Luminary[],
      luminariesSearched : [] as Luminary[],
      searchString: '',
    }
  },
  async created() {
    const store = useLuminariesStore();
    this.luminaries = store.luminaries;
  },
  methods: {
    search(searchString: string) {
      this.searchString = searchString
    }
  },
  computed: {
    searchedLuminaries() {
      this.luminariesSearched = this.luminaries.filter((luminary) => {
        return luminary.name.toLowerCase().includes(this.searchString.toLowerCase());
      });
      return this.luminariesSearched;
    }
  }
})
</script>