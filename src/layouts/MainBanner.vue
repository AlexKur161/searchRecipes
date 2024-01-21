<template>
  <div>
    <div class="main-wrapper">
      <div class="container">
        <h1 class="main-title">We will help you find the right recipe!</h1>
        <q-btn @click="go">test</q-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useSearchRecipe } from "../stores/search.js";

const search = useSearchRecipe();

function go() {
  search.searchAction();
}
</script>

<style scoped>
.main-wrapper {
  background-image: url("/img/backgroundMain.png");
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-title {
  color: #fff;
  text-align: center;
  font-size: 60px;
  max-width: 600px;
  line-height: 130%;
}
</style>
