<template>
  <div class="profil">
    <h1>
      {{ user.name }}
    </h1>
    <h2>Favorite</h2>
    <div class="no-favorite" v-if="luminariesFavorite.length === 0">
      <span> You have no favorite luminaries yet. </span>
    </div>
    <ul v-else>
      <LuminariesList
        :luminaries-set="luminariesFavorite"
        :pagination="false"
      />
    </ul>
    <router-link to="/">Discover luminaries</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LuminariesList from "@/components/LuminariesList.vue";
import { useLuminariesStore } from "@/store/luminaries";
import { useUsersStore } from "@/store/users";
import User from "@/models/user";
import router from "@/router";

const luminariesStore = useLuminariesStore();
const userStore = useUsersStore();

export default defineComponent({
  name: "Profile",
  components: {
    LuminariesList,
    router
},
  data() {
    return {
      isLoading: luminariesStore.$state.isLoading,
      user: userStore.user as User,
    };
  },
  computed: {
    luminariesFavorite() {
      const favorite = this.user.favoriteLuminaries;
      const luminaries = luminariesStore.luminaries;

      if (!favorite || !luminaries) {
        return [];
      }

      return luminaries.filter((luminary) => {
        return favorite.includes(luminary.id);
      });
    },
  },
});
</script>

<style scoped>
.profil {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul {
  width: 800px;
}

h1,
h2 {
  text-align: center;
}

span {
  display: block;
  text-align: center;
  font-size: 4em;
  text-transform: uppercase;
  font-family: "Italiana", serif;
}

.no-favorite {
  text-align: center;
}

a {
  margin-top: 5em;
  display: inline-block;
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
</style>
