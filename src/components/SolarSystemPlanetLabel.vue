<template>
  <input checked :class='["planet"+id]' :id='planetClass' name='planet' type='radio'>
  <label :class='["menu ", planetClass]' :for='planetClass'>
    <div class='preview'></div>
    <div class='info'>
      <h2>
        <div class='pip'></div>
        {{ planet.name }}
      </h2>
      <h3>{{ planet.englishName }}</h3>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Luminary from '@/models/luminary';

export default defineComponent({
  name: 'SolarSystemPlanetLabel',
  props: {
    planet: {
      type: Object as () => Luminary,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    planetClass(): string {
      return this.planet.englishName.toLowerCase();
    }
  }
});
</script>