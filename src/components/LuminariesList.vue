<template>
  <div>
    <cursorWaw />
    <ul>
      <LuminaryListItem 
        v-for="luminary in luminaries"
        :key="luminary.id"
        :luminary="luminary"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Luminary from "@/models/luminary";
import LuminaryListItem from "./LuminaryListItem.vue";
import cursorWaw from "./cursorWaw.vue";

export default defineComponent({
    name: "LuminariesList",
    data() {
        return {
            luminaries: [] as Luminary[],
        };
    },
    props: {
        luminariesSet: {
            type: Array as () => Luminary[],
            required: true,
        },
    },
    created() {
      this.luminaries = this.luminariesSet;
    },
    updated() {
      this.luminaries = this.luminariesSet;
    },
    components: { 
      LuminaryListItem,
      cursorWaw
     }
});
</script>

<style scoped>

/* hide default cursor */
html {
  cursor: none;
}

</style>