<template>
  <div class="cursor" ref="circle"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    document.addEventListener("mousemove", this.moveCircle);
  },
  beforeUnmount() {
    document.removeEventListener("mousemove", this.moveCircle);
  },
  methods: {
    moveCircle(e: MouseEvent) {
      const circle = this.$refs.circle as HTMLElement;
      const halfCircleSize = circle.offsetHeight / 2;

      const mouse_x = e.clientX;
      const mouse_y = e.clientY;

      circle.style.left = `${mouse_x - halfCircleSize}px`;
      circle.style.top = `${mouse_y - halfCircleSize}px`;
    },
  },
});
</script>

<style scoped>
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  backdrop-filter: drop-shadow(16px 16px 20px rgb(168, 255, 168)) invert(75%);
  z-index: 9999;
  pointer-events: none;
}
</style>
