<template>
  <li
    class="luminary-list-item"
    @mouseover="showData"
    @mousemove="updateDataPosition"
    @mouseleave="hideData"
  >
    <a href="#">
      <h2>{{ luminary.name }}</h2>
      <LikeButton :luminaryId="luminary.id" :isLiked="isLuminariesLiked()" />
    </a>
  </li>
  <span ref="data" class="data">
    <p>Semimajor Axis: {{ luminary.semimajorAxis }}</p>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Luminary from "@/models/luminary";
import LuminaryDialog from "./LuminaryDialog.vue";
import LikeButton from "./LikeButton.vue";
import { useUsersStore } from "@/store/users";

const usersStore = useUsersStore();
const user = usersStore.user;

export default defineComponent({
  name: "LuminaryListItem",
  props: {
    luminary: {
      type: Object as () => Luminary,
      required: true,
    },
  },
  methods: {
    isLuminariesLiked() {
      if (
        user.favoriteLuminaries &&
        user.favoriteLuminaries.includes(this.luminary.id)
      ) {
        return true;
      } else {
        return false;
      }
    },
    showData(event: MouseEvent) {
      const data = this.$refs.data as HTMLElement;
      if (data) {
        data.style.display = "block";
      }
    },
    hideData(event: MouseEvent) {
      const data = this.$refs.data as HTMLElement;
      if (data) {
        data.style.display = "none";
      }
    },
    updateDataPosition(event: MouseEvent) {
      const data = this.$refs.data as HTMLElement;
      if (data) {
        const x = event.clientX;
        const y = event.clientY;
        data.style.top = `${y}px`;
        data.style.left = `${x}px`;
      }
    },
  },
  data() {
    return {
      showDetails: false,
    };
  },
  components: {
    LuminaryDialog,
    LikeButton,
  },
});
</script>

<style scoped>
.luminary-list-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  cursor: pointer;
}

.cursor {
  position: absolute;
  top: -50%;
  left: -25%;
  z-index: -1;
  width: 600px;
  height: 400px;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  background-position: 50% 50%;
  background-size: cover;
  opacity: 0;
}

a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-decoration: none;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  mix-blend-mode: difference;
  transform: translate3d(0, 0, 0);
}

.data {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  background-color: #080808;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 9999;
}
</style>
