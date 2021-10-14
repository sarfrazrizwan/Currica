<template>
  <header class="header">
    <div class="mx-width">
      <nav class="navbar navbar-expand-xl align-item-center justify-content-between">
        <a class="navbar-brand" href="./index.html"><img src="@/assets/images/logo/logo.svg" width="60"/></a>
        <button class="navbar-toggler navbar-toggler-right  navbarToggler" type="button" data-toggle="collapse" data-target="#navb" @click="isToggle = !isToggle">
          <div class="toggle-icon"></div>
          <div class="toggle-icon"></div>
          <div class="toggle-icon"></div>
        </button>

        <div class="collapse navbar-collapse top_navbar justify-content-between" :class="{ show: isToggle }" id="navb">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                SUBJECT
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                GRADE
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                TYPE
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                LEARNING CENTER
              </router-link>
            </li>
          </ul>
          <div>
            <form class="search-form position-relative">
              <input class="form-control" type="text" placeholder="Search Here" id="search" :class="{ on_mobile: isToggle }" />
              <label class="search-label" for="search"><img src="@/assets/images/svgs/srchIcon.svg"/></label>
            </form>
          </div>
          <button type="button" class="btn btn-prime mx-xl-4 my-3 my-xl-0">JOIN FREE</button>
          <div class="user-profile-wrap">
            <div class="user-profile-image">
              <i class="fas fa-user"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data: () => ({
    isToggle: false,
  }),
});
</script>

<style scoped>
.on_mobile {
  width: 309px !important;
}
</style>
