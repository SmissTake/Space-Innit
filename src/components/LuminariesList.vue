<template>
  <div>
    <h2>Luminaries List</h2>
    <v-row
      gutter="20">
      <v-col
        v-for="luminary in luminaries"
        :key="luminary.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <LuminaryCard :luminary="luminary" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useLuminariesStore } from "@/store/luminaries";
import Luminary from "@/models/luminary";
import LuminaryCard from "./LuminaryCard.vue";

export default defineComponent({
  name: "LuminariesList",
  data() {
    return {
      luminaries: [] as Luminary[],
    };
  },
  async created() {
    const store = useLuminariesStore();
    this.luminaries = store.luminaries;
  },
  components: { LuminaryCard },
});
</script>
