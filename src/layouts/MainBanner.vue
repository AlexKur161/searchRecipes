<template>
  <div>
    <div class="main-wrapper">
      <div class="container">
        <div class="wrapper-scene">
          <div>
            <transition appear>
              <h1 class="main-title up">
                {{ $t("We will help you find the right recipe!") }}
              </h1>
            </transition>
            <router-link class="link-recipe up" to="#search">{{
              $t("Try it!")
            }}</router-link>
          </div>
          <SceneBook></SceneBook>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useGsapElement } from "src/composable/useGsapElement.ts";
import SceneBook from "components/SceneBook.vue";

const { up } = useGsapElement();
onMounted(() => {
  up();
});
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
.wrapper-scene {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main-title {
  color: #fff;
  font-size: 60px;
  max-width: 340px;
  line-height: 130%;
}
.link-recipe {
  display: block;
  width: fit-content;
  text-decoration: none;
  color: #fff;
  background: #00796b;
  padding: 20px 100px;
  border-radius: 5px;
  margin-top: 30px;
}
@media (max-width: 600px) {
  .main-title {
    font-size: 40px;
  }
}
</style>
