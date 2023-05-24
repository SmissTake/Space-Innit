<template>
  <v-btn color="primary" @click="like">
    <v-icon left>{{ liked ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
    {{ liked ? 'Liked' : 'Like' }}
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useUsersStore } from '@/store/users'

const usersStore = useUsersStore()

export default defineComponent({
  name: 'LikeButton',
  props: {
    luminaryId: {
      type: String,
      required: true,
    }
  },
  setup() {
    const liked = ref(false)

    return {
      liked,
    }
  },
  methods: {
    like() {
      this.liked = !this.liked
      this.favorite()
    },
    favorite() {
      usersStore.setFavorite(this.luminaryId)
    }
  }
})
</script>