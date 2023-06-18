<template>
  <div class="solar_systm">
    <div :class="['planet ', planetClass]">
      <template v-if="moons.length > 0">
        <template v-for="(moon, index) in moons" :key="index">
          <SolarSystemMoon :planet="moon" />
        </template>
      </template>
      <div :class="['planet_description ', planetClass]">
        <h2>Planet</h2>
        <h1>{{ planet.name }}</h1>
      </div>
      <!-- <div class='overlay'></div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Luminary from '@/models/luminary';
import { useLuminariesStore } from '@/store/luminaries';
import SolarSystemMoon from '@/components/SolarSystemMoon.vue';

const store = useLuminariesStore();

export default defineComponent({
  name: 'SolarSystemPlanetVisual',
  props: {
    planet: {
      type: Object as () => Luminary,
      required: true
    },
  },
  components: {
    SolarSystemMoon
  },
  data() {
    return {
      luminaries: [] as Luminary[],
      authMoons: [
        'Triton',
        'Proteus',
        'Nereid',
        'Miranda',
        'Ariel',
        'Umbriel',
        'Titan',
        'Dione',
        'Enceladus',
        'Io',
        'Europa',
        'Ganymede',
        'Deimos',
        'Moon',
      ]
    };
  },
  created() {
    this.luminaries = store.luminaries;
  },
  computed: {
    planetClass(): string {
      return this.planet.englishName.toLowerCase();
    },

    /**
     * the codepen template uses only some specific moons for each planet, listed in authMoons
     */
    moons(): Luminary[] {
      return this.luminaries.filter((luminary) => {
        return luminary.aroundPlanet?.planet === this.planet.id && this.authMoons.includes(luminary.englishName);
      });
    }
  }
});
</script>
