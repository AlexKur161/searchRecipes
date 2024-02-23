<template>
  <MainBanner></MainBanner>
  <FiltersSection></FiltersSection>
  <RecipesCountry></RecipesCountry>
</template>

<script setup>
import MainBanner from "../layouts/MainBanner.vue";
import FiltersSection from "../layouts/FiltersSection.vue";
import RecipesCountry from "../layouts/RecipesCountry.vue";
</script>
<style>
.main-wrapper {
  background-image: url("/img/backgroundMain.png");
  height: 100vh;
  background-size: cover;
}
</style>
