<template>
  <v-card>
    <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Star%2A.svg/1200px-Star%2A.svg.png" height="200"></v-img>
    <v-card-title>{{ luminary.name }}</v-card-title>
    <v-card-subtitle>{{ luminary.englishName }}</v-card-subtitle>
    <v-card-text>
      <p>Semimajor Axis: {{ luminary.semimajorAxis }}</p>
      <p>Perihelion: {{ luminary.perihelion }}</p>
      <p>Aphelion: {{ luminary.aphelion }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('view-details', luminary)">
        View Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Luminary from '@/models/luminary'

console.log(process.env.VUE_APP_UNSPLASH_ACCESS_KEY);

export default defineComponent({
  name: 'LuminaryCard',
  props: {
    luminary: {
      type: Object as () => Luminary,
      required: true,
    },
  },
  computed: {
    // imageUrl(): string {
    //   return `https://api.unsplash.com/search/photos?query={${this.luminary.name}}&client_id={${process.env.VUE_APP_UNSPLASH_ACCESS_KEY}}`
    // },
  },
})
</script>