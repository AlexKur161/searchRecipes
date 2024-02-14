<template>
  <div class="section-filters">
    <div class="container">
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
  store.changeName("chicken");
  store.searchAction();
});
</script>

<style scoped>
.section-filters {
  background: #11151e;
}
.card-wrapper {
  justify-content: space-between;
  gap: 30px;
}
</style>
