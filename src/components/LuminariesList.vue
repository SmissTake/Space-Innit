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
      <v-row justify="center">
        <v-progress-circular indeterminate></v-progress-circular>
      </v-row>
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
      page: 1,
      pageSize: 20,
      isLoading: false,
    };
  },
  async created() {
    const store = useLuminariesStore();
    this.luminaries = store.luminaries.slice(0, this.pageSize);;
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const bottom = scrollHeight - scrollTop - clientHeight;
      if (bottom <= 0 && !this.isLoading) {
        this.loadMore();
      }
    },
    async loadMore() {
      this.isLoading = true;
      this.page++;
      const store = useLuminariesStore();
      const start = (this.page - 1) * this.pageSize;
      const end = start + this.pageSize;
      const luminaries = store.luminaries.slice(start, end);
      this.luminaries = [...this.luminaries, ...luminaries];
      this.isLoading = false;
    },
  },
  components: { LuminaryCard },
});
</script>
