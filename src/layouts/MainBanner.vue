<template>
  <div>
    <div class="main-wrapper">
      <div class="container">
        <h1 class="main-title">
          {{ $t("We will help you find the right recipe!") }}
        </h1>
        <router-link class="link-recipe" to="#search">{{
          $t("Try it!")
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
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
  max-width: 650px;
  line-height: 130%;
}
.link-recipe {
  display: block;
  width: fit-content;
  text-decoration: none;
  color: #fff;
  background: #00796b;
  padding: 20px 40px;
  border-radius: 5px;
  margin: auto;
  margin-top: 30px;
}
</style>
