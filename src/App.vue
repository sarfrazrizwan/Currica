<template>
  <dir>
    <Header />
    <router-view />
    <Footer />
  </dir>
</template>

<script lang="ts">
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/main.css";
import Header from "@/components/shared/Header.vue";
import Footer from "@/components/shared/Footer.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { Header, Footer },
});
</script>
