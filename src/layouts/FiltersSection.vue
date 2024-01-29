<template>
  <div class="section-filters">
    <div class="container">
      <FiltersRecipes />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import FiltersRecipes from "components/FiltersRecipes.vue";
</script>

<style scoped>
.section-filters {
}
</style>
