<template>
  <v-btn color="surface" rounded="xl" size="x-large" @click.stop="like" style=" height: 5em ">
    <v-icon left class="heart-icon" :style="{ color: liked ? '#26daaa' : 'white' }">{{ liked ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
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
      if(this.liked) {
        this.unfavorite()
      }
      else {
        this.favorite()
      }
      this.liked = !this.liked
    },
    favorite() {
      usersStore.setFavorite(this.luminaryId)
    },
    unfavorite() {
      usersStore.removeFavorite(this.luminaryId)
    }
  }
})
</script>