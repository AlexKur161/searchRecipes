<template>
  <div id="search" class="section-block">
    <div class="container">
      <h2 class="text-white text-center filter-title">
        {{ $t("Recipes for every taste") }}
      </h2>
      <FiltersRecipes />
      <div v-if="store.recipes.length > 0" class="card-wrapper row">
        <CardRecipes
          v-for="(card, i) in store.recipes"
          :recipe="card"
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
        {{ $t("Select the parameters to filter") }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onBeforeMount } from "vue";
import FiltersRecipes from "components/FiltersRecipes.vue";
import CardRecipes from "components/CardRecipe.vue";
import { useSearchRecipe } from "/src/stores/search.js";

const store = useSearchRecipe();

const showLoaded = computed(() => {
  return store.visible;
});
onBeforeMount(() => {
  store.searchAction("&q=chicken");
});
</script>

<style scoped>
.pagination-wrap {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.nodata-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 40px;
}
.card-wrapper {
  justify-content: space-between;
  gap: 30px;
  position: relative;
}
@media (max-width: 1000px) {
  .card-wrapper {
    flex-direction: column;
  }
}
@media (max-width: 600px) {
  .filter-title {
    font-size: 40px;
    line-height: 130%;
  }
  .card-wrapper {
    gap: 20px;
  }
  .nodata-wrapper {
    font-size: 18px;
  }
}
</style>
