<template>
  <v-card 
    elevation="5">
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

export default defineComponent({
  name: 'LuminaryCard',
  props: {
    luminary: {
      type: Object as () => Luminary,
      required: true,
    },
  },
  computed: {
  },
})
</script>