<template>
  <div>
    <h1>
      {{ user.name }}
    </h1>

    <v-row v-if="luminariesFavorite.length === 0">
      <v-col cols="6">
        <v-alert type="info">
          You have no favorite luminaries yet.
        </v-alert>
      </v-col>
    </v-row>
    <v-row v-else>
      <h2>
        Favorite
      </h2>
      <LuminariesList :luminaries-set="luminariesFavorite" :pagination="false"/>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LuminariesList from '@/components/LuminariesList.vue'
import { useLuminariesStore } from "@/store/luminaries";
import { useUsersStore } from '@/store/users';
import User from '@/models/user';

const luminariesStore = useLuminariesStore();
const userStore = useUsersStore();

export default defineComponent({
  name: 'Profile',
  components: {
    LuminariesList,
  },
  data() {
    return {
      isLoading: luminariesStore.$state.isLoading,
      user: userStore.user as User,
    }
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
    }
  }
})
</script>