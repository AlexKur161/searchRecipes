<template>
  <div class="main-wrapper">
    <q-btn @click="getFood">test</q-btn>
  </div>
</template>

<script setup>
import { api } from "boot/axios";

function getFood() {
  api
    .get(
      "https://api.edamam.com/api/recipes/v2?type=public&app_id=9133ecf7&app_key=%201dc00f739ac8dce83875c61eae475139"
    )
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
</script>
<style>
.main-wrapper {
  background-image: url("/img/backgroundMain.png");
  height: 700px;
  background-size: cover;
}
</style>
