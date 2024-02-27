<template>
  <div id="cuisines" class="section-block">
    <div class="container">
      <h2 class="text-white text-center">
        {{ $t("National cuisines of the world") }}
      </h2>
      <CountryTabs />
      <div class="card-wrapper row">
        <CardRecipe
          :recipe="card"
          v-for="(card, i) in store.recipesCountry"
          :cardId="i"
          :key="i"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import CountryTabs from "../components/CountryTabs.vue";
import CardRecipe from "../components/CardRecipe.vue";
import { useCountryRecipe } from "/src/stores/countryRecipe.js";

const store = useCountryRecipe();

onBeforeMount(() => {
  store.countryAction("British");
});
</script>

<style scoped>
.card-wrapper {
  justify-content: space-between;
  gap: 30px;
}
</style>
