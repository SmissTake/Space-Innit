<template>
  <div>
    <LuminariesList :luminaries-set="luminaries"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import LuminariesList from '@/components/LuminariesList.vue'
import { useLuminariesStore } from "@/store/luminaries";
import Luminary from '@/models/luminary';

const store = useLuminariesStore();

export default defineComponent({
  name: 'Home',
  components: {
    LuminariesList,
  },
  data() {
    return {
      isLoading: store.$state.isLoading,
      luminaries: [] as Luminary[],
    }
  },
  async created() {
    const store = useLuminariesStore();
    this.luminaries = store.luminaries;
  },
})
</script>