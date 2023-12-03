<template>
  <div>
    <h3>
      Type:
    </h3>
    <v-radio-group
      v-model="filters.type"
      @change="$emit('type', filters.type)"
      inline
      >
      <v-radio label="Planets" value="Planet" @click="uncheck('Planet')"/>
      <v-radio label="Moons" value="Moon" @click="uncheck('Moon')"/>
      <v-radio label="Asteroids" value="Asteroid" @click="uncheck('Asteroid')"/>
      <v-radio label="Comets" value="Comet" @click="uncheck('Comet')"/>
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
  methods: {
    uncheck(value: string) {
      if (this.filters.type === value) {
        this.filters.type = '';
        this.$emit('type', this.filters.type);
      }
    },
  },
  emits: {
    type: (type: string) => true,
  },
});
</script>
