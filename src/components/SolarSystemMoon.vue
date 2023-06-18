<template>
  <div :class="['moon ', planetClass]">
    <h3>
      {{ planet.bodyType }}
    </h3>
    <h2>
      {{ planet.name }}
    </h2>
  </div>
  <div :class="['trajectory ', planetClass]"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Luminary from "@/models/luminary";

export default defineComponent({
  name: "SolarSystemMoon",
  props: {
    planet: {
      type: Object as () => Luminary,
      required: true,
    },
  },
  computed: {
    planetClass(): string {
      return this.planet.englishName.toLowerCase();
    },
  },
});
</script>
