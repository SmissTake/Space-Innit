<template>
  <v-card 
    elevation="5">
    <v-card-title>{{ luminary.name }}</v-card-title>
    <v-card-subtitle>{{ luminary.englishName }}</v-card-subtitle>
    <v-card-text>
      <p>Semimajor Axis: {{ luminary.semimajorAxis }}</p>
      <p>Perihelion: {{ luminary.perihelion }}</p>
      <p>Aphelion: {{ luminary.aphelion }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="showDetails = true" >
        View Details
      </v-btn>
      <LikeButton :luminaryId="luminary.id" :isLiked="isLuminariesLiked()"/>
    </v-card-actions>
    <LuminaryDialog :luminary="luminary" v-model="showDetails" />
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Luminary from '@/models/luminary'
import LuminaryDialog from './LuminaryDialog.vue';
import LikeButton from './LikeButton.vue';
import { useUsersStore } from '@/store/users';

const usersStore = useUsersStore();
const user = usersStore.user;

export default defineComponent({
    name: "LuminaryCard",
    props: {
        luminary: {
            type: Object as () => Luminary,
            required: true,
        },
    },
    methods: {
      isLuminariesLiked() {
        if(user.favoriteLuminaries && user.favoriteLuminaries.includes(this.luminary.id)) {
          return true;
        }
        else {
          return false;
        }
      }
    },
    data() {
        return {
            showDetails: false,
        };
    },
    components: { 
      LuminaryDialog,
      LikeButton
    }
})
</script>