<template>
  <div>
    <h2 class="heading2 pb-3">Attributes</h2>
    <div class="d-flex flex-column mt-2">
      <div class="text-sm-bold">SUBJECT</div>
      <div class="text-sm-medium">{{ info.subject }}</div>
    </div>
    <div class="d-flex flex-column mt-2">
      <div class="text-sm-bold">GRADES</div>
      <div class="text-sm-medium">{{ info.grades }}</div>
    </div>
    <div class="d-flex flex-column mt-2">
      <div class="text-sm-bold">TYPE</div>
      <div class="text-sm-medium">{{ info.type }}</div>
    </div>
    <div class="d-flex flex-column mt-2">
      <div class="text-sm-bold">FILE</div>
      <div class="text-sm-medium">{{ info.file }}</div>
    </div>
    <div class="d-flex flex-column mt-2">
      <div class="text-sm-bold">EDITABLE</div>
      <div class="text-sm-medium">{{ info.editable }}</div>
    </div>
    <div class="d-flex flex-column mt-2">
      <div class="text-sm-bold">File Number</div>
      <div class="text-sm-medium">{{ info.fileNumber }}</div>
    </div>
    <div class="mt-3">
      <button class="btn btn-download">Download <img src="@/assets/images/svgs/download.svg" width="20" /></button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IProductAttribute from "@/models/ProductAttribute";
export default defineComponent({
  props: {},
  data: () => ({
    info: {
      subject: "Science > Nature",
      grades: "Not Set",
      type: "Graphic",
      file: "PDF, .Ai, .ESP",
      editable: "Yes",
      fileNumber: "172356",
    },
  }),
  methods: {},
});
</script>
