<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        @input="$emit('search', search)"
      ></v-text-field>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LuminariesSearch',
  data() {
    return {
      search: '',
    }
  },
  emits: {
    search: (search: string) => true,
  }
})
</script>