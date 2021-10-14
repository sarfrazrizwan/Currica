<template>
  <footer>
    <div class="mx-width pt-5 px-xl-5">
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-3 mb-lg-0">
          <div class="f-list">
            <h1 class="company_name">Company Name</h1>
            <ul>
              <li><a href="">Company Slogan</a></li>
              <li><a href="">©2020 - Company Name</a></li>
              <li><a href="">Address</a></li>
              <li><a href="">Email</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 pt-1 col-md-6 mb-3 mb-lg-0">
          <div class="f-list">
            <h1 class="company_mp">MARKETPLACE</h1>
            <ul>
              <li><a href="">Menu One</a></li>
              <li><a href="">Menu Two</a></li>
              <li><a href="">Menu Three</a></li>
              <li><a href="">Menu Four</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 pt-1 col-md-6 mb-3 mb-lg-0">
          <div class="f-list">
            <h1 class="company_mp">LEARNING CENTER</h1>
            <ul>
              <li><a href="">Menu One</a></li>
              <li><a href="">Menu Two</a></li>
              <li><a href="">Menu Three</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 pt-1 col-md-6 mb-3 mb-lg-0">
          <div class="f-list">
            <h1 class="company_mp1">BECOME A CONTRIBUTOR</h1>
            <p class="text-sm">Sell your curriculums and reach thousands of teachers Company Name to earn cash!</p>
            <button class="btn btn-download text-uppercase">Sign UP</button>
          </div>
        </div>
      </div>
      <div class="social-media-icons pt-4">
        <ul class="d-flex list-unstyled">
          <li>
            <a href=""><img src="@/assets/images/svgs/twitter.svg"/></a>
          </li>
          <li>
            <a href=""><img src="@/assets/images/svgs/facebook.svg"/></a>
          </li>
          <li>
            <a href=""><img src="@/assets/images/svgs/instagram.svg"/></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
});
</script>
