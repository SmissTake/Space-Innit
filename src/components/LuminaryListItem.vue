<template>
  <li
    class="luminary-list-item"
    @mouseover="showData"
    @mousemove="updateDataPosition"
    @mouseleave="hideData"
    @click="showDataClick"
  >
    <a>
      <h2>{{ luminary.name }}</h2>
      <LikeButton :luminaryId="luminary.id" :isLiked="isLuminariesLiked()" />
    </a>
  </li>
  <span ref="data" class="data">
    <div class="title">
      <h3>{{ luminary.name }}</h3>
      <h4 v-if="luminary.bodyType">
        {{ luminary.bodyType }}
      </h4>
    </div>
    <p v-if="luminary.discoveredBy">
      Discovered by
      <b>{{ luminary.discoveredBy }}</b> on {{ luminary.discoveryDate }}
    </p>
    <p v-if="luminary.alternativeName">
      Alternative name: {{ luminary.alternativeName }}
    </p>
    <p v-if="luminary.gravity">Gravity: {{ luminary.gravity }} m/s²</p>
    <p v-if="luminary.avgTemp">
      Average temperature: {{ luminary.avgTemp }} °K
    </p>
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
    showData() {
      if (!this.isMobile()) {
        const data = this.$refs.data as HTMLElement;
        if (data) {
          data.style.display = "block";
        }
      }
    },
    showDataClick() {
      if (this.isMobile()) {
      const data = this.$refs.data as HTMLElement;
      data.removeAttribute("style");
      if (data) {
            data.classList.toggle("show");
        }
      }
    },
    hideData() {
      if (!this.isMobile()) {
        const data = this.$refs.data as HTMLElement;
        if (data) {
          data.style.display = "none";
        }
      }
    },
    updateDataPosition(event: MouseEvent) {
      if (!this.isMobile()) {
        const data = this.$refs.data as HTMLElement;
        if (data) {
          const x = event.pageX;
          const y = event.pageY;
          const width = data.offsetWidth;
          const viewportWidth = window.innerWidth - 20; // 20 is the scrollbar width
          let left = x - width / 2;
          let top = y + 40;
          if (left < 0) {
            left = 0;
          } else if (left + width > viewportWidth) {
            left = viewportWidth - width;
          }
          data.style.left = `${left}px`;
          data.style.top = `${top}px`;
        }
      }
    },
    isMobile() {
      return window.innerWidth < 600;
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
  cursor: none;
}

a:before {
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  background: linear-gradient(217deg, #26daaa, rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, #8dcdd8, rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, #ff8732, rgba(0, 0, 255, 0) 70.71%);
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
  font-size: clamp(2rem, 5vw, 5rem);
  font-weight: 100;
  text-transform: uppercase;
}

.title h3 {
  font-size: 2em;
  font-weight: 600;
  padding: 10px;
}
.title h4 {
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  font-weight: 400;
  padding: 10px;
}

.data .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(217deg, #26daaa, rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, #8dcdd8, rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, #ff8732, rgba(0, 0, 255, 0) 70.71%);
  border-radius: 0.25rem;
}

.data {
  width: 20rem;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  backdrop-filter: blur(10px);
  padding: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
  color: white;
}

@media screen and (max-width: 600px) {
  a {
    cursor: pointer;
  }
  .data {
    display: block;
    position: relative;
    padding: 0;
    width: 100%;
    border-radius: 0;
    overflow: hidden;
    max-height: 0px !important;
    transition: max-height 0.5s ease-out;
    transition: padding 0.1s ease-out;
  }

  .data.show {
    padding: 0.5rem;
    height: 100% !important;
    max-height: 1000px !important;
    transition: max-height 0.5s ease-out;
    transition: padding 0.1s ease-out;
  }
}
</style>
