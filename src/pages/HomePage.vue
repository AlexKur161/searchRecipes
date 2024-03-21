<template>
  <HeaderRecipe />
  <MainBanner></MainBanner>
  <FiltersSection></FiltersSection>
  <RecipesCountry></RecipesCountry>
  <FooterRecipe />
</template>

<script setup>
import MainBanner from "../layouts/MainBanner.vue";
import FiltersSection from "../layouts/FiltersSection.vue";
import RecipesCountry from "../layouts/RecipesCountry.vue";
import FooterRecipe from "../components/FooterRecipe.vue";
import HeaderRecipe from "../components/HeaderRecipe.vue";
</script>
<style>
.main-wrapper {
  background-image: url("/img/backgroundMain.png");
  height: 100vh;
  background-size: cover;
}
</style>
../layouts/FilterSection.vue