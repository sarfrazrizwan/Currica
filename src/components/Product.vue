<template>
  <div :class="className">
    <div class="card card_shadow">
      <div class="card-body">
        <div class="card_image_container">
          <img src="@/assets/images/main/photo-1524840127331-f2ca773ec28f.jpg" class="img-fluid" />
        </div>
        <div class="card_text_container">
          <div class="d-flex justify-content-between pt-3 align-items-xl-center flex-lg-row flex-column">
            <div class="col-left">
              <div class="p_name">Product Name</div>
              <div class="p_text">Math For Grade 5, By Gather Around</div>
            </div>
            <div class="col-right">
              <button type="button" class="btn p-0"><img src="@/assets/images/svgs/heart-shape-outline.svg" width="25" /></button>
              <button type="button" class="btn p-0"><img src="@/assets/images/svgs/download-1.svg" width="25" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    className: {
      type: String,
      required: true,
    },
  },
});
</script>
