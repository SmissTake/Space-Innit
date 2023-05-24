<template>
  <div>
    <h2>Luminaries List</h2>
    <ul>
      <li v-for="luminary in luminaries" :key="luminary.id">
        <LuminaryCard :luminary="luminary" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLuminariesStore } from '@/store/luminaries'
import Luminary from '@/models/luminary'
import LuminaryCard from './LuminaryCard.vue'

export default defineComponent({
    name: "LuminariesList",
    data() {
        return {
            luminaries: [] as Luminary[],
        };
    },
    async created() {
        const store = useLuminariesStore();
        this.luminaries = store.luminaries;
    },
    components: { LuminaryCard }
})
</script>