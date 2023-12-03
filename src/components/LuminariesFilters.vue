<template>
  <div>
    <v-radio-group
      v-model="filters.type"
      @change="$emit('type', filters.type)"
      >
      <v-radio label="Planets" value="Planet" />
      <v-radio label="Moons" value="Moon" />
      <v-radio label="Asteroids" value="Asteroid" />
      <v-radio label="Comets" value="Comet" />
    </v-radio-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LuminariesFilters",
  data() {
    return {
      filters: {
        type: "",
      },
    };
  },
  emits: {
    type: (type: string) => true,
  },
});
</script>
