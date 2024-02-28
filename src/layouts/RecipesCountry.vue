<template>
  <div id="cuisines" class="section-block">
    <div class="container">
      <h2 class="text-white text-center filter-title">
        {{ $t("National cuisines of the world") }}
      </h2>
      <CountryTabs />
      <div v-if="store.recipesCountry.length > 0" class="card-wrapper row">
        <CardRecipe
          :recipe="card"
          v-for="(card, i) in store.recipesCountry"
          :cardId="i"
          :key="i"
        />
        <q-inner-loading
          style="background: rgb(255 255 255 / 0%)"
          size="80px"
          color="primary"
          :showing="showLoaded"
        />
      </div>
      <div class="nodata-wrapper" v-else>
        {{ $t("No Data") }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onBeforeMount } from "vue";
import CountryTabs from "../components/CountryTabs.vue";
import CardRecipe from "../components/CardRecipe.vue";
import { useCountryRecipe } from "/src/stores/countryRecipe.js";

const store = useCountryRecipe();

const showLoaded = computed(() => {
  return store.visible;
});
onBeforeMount(() => {
  store.countryAction("British");
});
</script>

<style scoped>
.card-wrapper {
  position: relative;
  justify-content: space-between;
  gap: 30px;
}
@media (max-width: 600px) {
  .filter-title {
    font-size: 40px;
    line-height: 130%;
  }
}
</style>
