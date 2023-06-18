<template>
  <v-app-bar flat color="#000000ae" :style="{ backdropFilter: 'blur(10px)' }">
    <v-app-bar-title>
      Space ?
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn to="/">Home</v-btn>
    <v-btn to="/solar-system">Solar System</v-btn>
    <v-btn to="/profile">Profile</v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
  //
</script>

<style scoped>
  v-app-bar-title {
    font-family: 'Italiana', serif;
  }
</style>
