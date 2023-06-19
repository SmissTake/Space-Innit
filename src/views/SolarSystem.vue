<template>
  <div class="solar-system-view">
  <template v-for="(planet, index) in orderedPlanets" :key="index">
    <SolarSystemPlanetLabel  :planet="planet"  :id="orderedPlanets.length - index"/>
  </template>

<div class='solar'>
  <template v-for="(planet, index) in orderedPlanets.slice().reverse()" :key="index">
    <SolarSystemPlanetVisual :planet="planet"/>
  </template>
</div>
</div>
</template>
<script lang="ts">
import { useLuminariesStore } from '@/store/luminaries';
import Luminary from '@/models/luminary';
import { defineComponent } from 'vue';
import SolarSystemPlanetLabel from '@/components/SolarSystemPlanetLabel.vue';
import SolarSystemPlanetVisual from '@/components/SolarSystemPlanetVisual.vue';

const store = useLuminariesStore();

export default defineComponent ({
    name: "SystemSolar",
    components: { 
      SolarSystemPlanetLabel,
      SolarSystemPlanetVisual
     },
    data() {
        return {
            luminaries: [] as Luminary[],
        };
    },
    created() {
        this.luminaries = store.luminaries;
    },
    computed: {
        solarSystemPlanets() {
          const planets = this.luminaries = this.luminaries.filter((luminary) => {
            return luminary.isPlanet;
          });
          return planets;
        },
        orderedPlanets() {
          return this.solarSystemPlanets.sort((a, b) => {
            return b.aphelion - a.aphelion;
          });
        }
    },
})

</script>