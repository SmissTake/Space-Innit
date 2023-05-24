<template>
  <div>
    <v-progress-linear v-if="isLoading" indeterminate :height="7"></v-progress-linear>

    <LuminariesList v-else/>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import LuminariesList from '@/components/LuminariesList.vue'
import { useLuminariesStore } from "@/store/luminaries";

const store = useLuminariesStore();

export default defineComponent({
  name: 'Home',
  components: {
    LuminariesList,
  },
  data() {
    return {
      isLoading: store.$state.isLoading,
    }
  },
})
</script>