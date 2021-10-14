<template>
  <div>
    <section>
      <div class="mx-width pt-5">
        <div class="d-flex flex-column main-heading mb-4">
          <span>BREADCRUMBS | BREADCRUMBS</span>
          <h1>Zoology Illustrations</h1>
        </div>
        <div class="row">
          <div class="col-md-8">
            <Images />
          </div>
          <div class="col-md-4">
            <Info />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="mx-width">
        <div class="py-5">
          <h2 class="heading2">About This Product:</h2>
          <p class="text-md1 mb-0">
            Zoology is a you a beautiful set of vintage illustrations featuring the animal kingdom. Perfect to print and hang in your classroom or workbooks. The set has 162 different animals.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="mx-width pb-5">
        <h2 class="heading2">What’s Included::</h2>
        <p class="text-md1 mb-0">The 162 creatures which can be edited using the .Ai or .ESP file or printed from the PDF.</p>
        <ul class="mb-0 pl-4">
          <li class="text-md1 mb-0">117 mammals and land beasts. From an Aardvark to a Zebra.</li>
          <li class="text-md1 mb-0">30 sea dwellers, featuring a large variety of fish and crustaceans.</li>
          <li class="text-md1 mb-0">15 reptiles, featuring lizards and snakes and some dinosaurs.</li>
        </ul>
      </div>
    </section>

    <section>
      <div class="mx-width">
        <div>
          <h1 class="heading-bg mb-3">You May Also Like</h1>
          <p class="mb-3 text-md1 col-12 col-xl-8 px-0">Home is behind, the world ahead and there are many paths to tread through shadows to the edge, world ahead and there are.</p>
        </div>
        <div class="row">
          <Product class-name="col-lg-4 col-sm-6 mb-4" v-for="(n, i) in 6" :key="i" />
        </div>
        <div class="text-center text-center pt-4 pb-4">
          <button type="button" class="btn btn-viewmore">View More</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Images from "@/components/product/Images.vue";
import Info from "@/components/product/Info.vue";
import Product from "@/components/Product.vue";
import { defineComponent } from "vue";
import IProduct from "@/models/Product";
export default defineComponent({
  name: "Home",
  components: { Images, Info, Product },
  data: () => ({
    product: {} as IProduct,
  }),
  mounted() {
    this.product = {
      id: "23y23423p0432yiuewe",
      name: "Zoology Illustrations",
      about: "",
      attribute: {
        subject: "Science > Nature",
        grades: "Not Set",
        type: "Graphic",
        file: "PDF, .Ai, .ESP",
        editable: "Yes",
        fileNumber: "172356",
      },
      images: [
        require("@/assets/images/main/photo-1524840127331-f2ca773ec28f.jpg"),
        require("@/assets/images/main/rain.png"),
        require("@/assets/images/main/art.png"),
        require("@/assets/images/main/photo-1524840127331-f2ca773ec28f.jpg"),
      ],
    };
  },
});
</script>
