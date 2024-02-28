<template>
  <div>
    <q-btn
      :disable="store.prev === ''"
      @click="switchPage"
      size="20px"
      flat
      round
      color="teal-8"
      icon="chevron_left"
    />
    <q-btn
      @click="switchPage"
      size="20px"
      flat
      round
      color="teal-8"
      icon="navigate_next"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useSearchRecipe } from "/src/stores/search.js";

const store = useSearchRecipe();

function switchPage() {
  store.pageAction(store.next);
}
</script>

<style scoped></style>
