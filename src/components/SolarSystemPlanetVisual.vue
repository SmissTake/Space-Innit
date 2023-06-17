<template>
  <div class='solar_systm'>
    <div :class='["planet ", planetClass]'>
      <div :class='["planet_description ", planetClass]'>
        <h2>Planet</h2>
        <h1>{{ planet.name }}</h1>
        <p>The closest planet to the sun. It circles the sun faster than all the other planets, which is why Romans named it after their swift-footed messenger god.</p>
      </div>
      <div class='overlay'></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Luminary from '@/models/luminary';

export default defineComponent({
  name: 'SolarSystemPlanetVisual',
  props: {
    planet: {
      type: Object as () => Luminary,
      required: true
    },
  },
  computed: {
    planetClass(): string {
      return this.planet.englishName.toLowerCase();
    }
  }
});
</script>