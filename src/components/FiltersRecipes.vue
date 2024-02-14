<template>
  <div class="row">
    <q-input style="max-width: 400px" v-model="filterName" />
    <q-select></q-select>
    <q-select></q-select>
    <q-btn @click="searchRecipe" label="Search" />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useSearchRecipe } from "../stores/search.js";

const filterName = ref("");
const store = useSearchRecipe();

function searchRecipe() {
  store.changeName(filterName.value);
  store.searchAction();
}
</script>

<style scoped></style>
