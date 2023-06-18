<template>
  <div>
    <h2>Luminaries List</h2>
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
import { useLuminariesStore } from "@/store/luminaries";
import Luminary from "@/models/luminary";
// import LuminaryCard from "./LuminaryCard.vue";
import LuminaryListItem from "./LuminaryListItem.vue";

export default defineComponent({
    name: "LuminariesList",
    data() {
        return {
            page: 1,
            pageSize: 20,
            isLoading: false,
            luminaries: [] as Luminary[],
        };
    },
    props: {
        luminariesSet: {
            type: Array as () => Luminary[],
            required: true,
        },
        pagination: {
            type: Boolean,
            default: true,
        },
    },
    created() {
        if (this.pagination) {
            this.luminaries = this.luminariesSet.slice(0, this.pageSize);
        }
        else {
            this.luminaries = this.luminariesSet;
        }
    },
    updated() {
        if (this.pagination) {
            this.luminaries = this.luminariesSet.slice(0, this.pageSize);
            window.addEventListener("scroll", this.handleScroll);
        }
        else {
            this.luminaries = this.luminariesSet;
        }
    },
    beforeUnmount() {
        if (this.pagination) {
            window.removeEventListener("scroll", this.handleScroll);
        }
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
    components: { LuminaryListItem }
});
</script>
