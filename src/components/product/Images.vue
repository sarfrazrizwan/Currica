<template>
  <div>
    <div class="main-image">
      <img :src="images[selectedImage]" />
    </div>
    <div class="thumbnail-images mt-3">
      <img v-for="(image, i) in images" :key="i" :src="image" @click="selectImage(i)" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {},
  data: () => ({
    selectedImage: 0,
    images: [require("@/assets/images/main/photo-1524840127331-f2ca773ec28f.jpg"), require("@/assets/images/main/rain.png"), require("@/assets/images/main/art.png")],
  }),
  methods: {
    selectImage(index: number) {
      this.selectedImage = index;
    },
  },
});
</script>
<style scoped>
.thumbnail-images img {
  cursor: pointer;
}
</style>
