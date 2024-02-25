<template>
  <div id="search" class="section-block">
    <div class="container">
      <h2 class="text-white text-center">
        {{ $t("Recipes for every taste") }}
      </h2>
      <FiltersRecipes />
      <div class="card-wrapper row">
        <CardRecipes
          :recipe="card"
          v-for="(card, i) in store.recipes"
          :key="i"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import FiltersRecipes from "components/FiltersRecipes.vue";
import CardRecipes from "components/CardRecipe.vue";
import { useSearchRecipe } from "/src/stores/search.js";

const store = useSearchRecipe();

onBeforeMount(() => {
  store.searchAction("&q=chicken");
});
</script>

<style scoped>
.card-wrapper {
  justify-content: space-between;
  gap: 30px;
}
</style>
