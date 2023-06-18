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
    <p>Eccentricity: {{ luminary.eccentricity }}</p>
    <p>Inclination: {{ luminary.inclination }}</p>
    <p v-if="luminary.aroundPlanet">
      Around Planet: {{ luminary.aroundPlanet.planet }}
    </p>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Luminary from "@/models/luminary";
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
        const x = event.pageX;
        const y = event.pageY;
        data.style.top = `${y+40}px`;
        data.style.left = `${x+40}px`;
      }
    },
  },
  data() {
    return {
      isScrolling: false,
      scrollY: 0,
      scrollVelocity: 0,
    };
  },
  components: {
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
  border-radius: 0.5rem;
  cursor: pointer;
  transition: color 0.1s ease-in-out;
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

a:before{
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  background: linear-gradient(217deg, #26daaa, rgba(255,0,0,0) 70.71%),linear-gradient(127deg, #8dcdd8, rgba(0,255,0,0) 70.71%),linear-gradient(336deg, #FF8732, rgba(0,0,255,0) 70.71%);
  position: absolute;
  left: 0;
  bottom: -3px; /* this is to match where the border is */
  transform-origin: left; 
  transform: scale(0);
  transition: 0.25s linear;
}

a:hover {
  color: #8dcdd8;
  transition: color 0.1s ease-in-out;
}

a:hover:before {
  transform: scale(1);
}

h2 {
  font-size: 3em;
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

  #circle {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background: #ccc;
    border: 20px solid #8dcdd8;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    top: calc(50vh - 100px);
    left: calc(50vw - 100px);
  }
</style>
