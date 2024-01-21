<template>
  <MainBanner></MainBanner>
  <FiltersSection></FiltersSection>
</template>

<script setup>
import { api } from "boot/axios";
import MainBanner from "../layouts/MainBanner.vue";
import FiltersSection from "../layouts/FiltersSection.vue";

function getFood() {
  api
    .get(
      "https://api.edamam.com/api/recipes/v2?type=public&app_id=9133ecf7&app_key=%201dc00f739ac8dce83875c61eae475139"
    )
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
</script>
<style>
.main-wrapper {
  background-image: url("/img/backgroundMain.png");
  height: 100vh;
  background-size: cover;
}
</style>
