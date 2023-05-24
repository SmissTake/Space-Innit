<template>
  <v-btn color="primary" @click="like">
    <v-icon left>{{ liked ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
    {{ liked ? 'Liked' : 'Like' }}
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LikeButton',
  setup() {
    const liked = ref(false)

    const like = () => {
      liked.value = !liked.value
    }

    return {
      liked,
      like,
    }
  },
})
</script>