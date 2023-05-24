<template>
  <v-btn color="primary" @click="like">
    <v-icon left>{{ liked ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
    {{ liked ? 'Liked' : 'Like' }}
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useUsersStore } from '@/store/users'
import { is } from '@babel/types'

const usersStore = useUsersStore()

export default defineComponent({
  name: 'LikeButton',
  props: {
    luminaryId: {
      type: String,
      required: true,
    },
    isLiked: {
      type: Boolean,
      required: true,
    }
  },
  setup(props) {
    // const liked is value of initial isLiked prop
    const liked = ref(props.isLiked)
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