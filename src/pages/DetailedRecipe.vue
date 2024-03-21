<template>
  <HeaderRecipe />
  <div class="page-detailed">
    <div class="container">
      <div class="img-info-wraper">
        <img
          class="img-recipe-info showel"
          :src="infoRecipe.recipe.image"
          alt="imgfood"
        />
      </div>
      <h3 class="title-detailed up">{{ infoRecipe.recipe.label }}</h3>
      <div class="cal-info-wraper">
        <div class="cal-info">{{ calculationCal }} {{ $t("cal") }}</div>
        <div class="cal-info">{{ calculationG }} {{ $t("g") }}</div>
        <div class="cal-info">
          {{ infoRecipe.recipe.totalTime }} {{ $t("min") }}
        </div>
        <div class="cal-info">
          {{ infoRecipe.recipe.yield }} {{ $t("servings") }}
        </div>
      </div>
      <div class="discription-wraper">
        <p
          v-for="(ingredient, i) in infoRecipe.recipe.ingredientLines"
          :key="i"
          class="discription-txt"
        >
          {{ ingredient }}
        </p>
        <a class="link-detail" target="_blank" :href="infoRecipe.recipe.url">{{
          $t("Go to the recipe")
        }}</a>
      </div>
    </div>
  </div>
  <FooterRecipe />
</template>

<script setup>
import { ref, reactive, computed, onBeforeMount, onMounted } from "vue";
import FooterRecipe from "../components/FooterRecipe.vue";
import HeaderRecipe from "../components/HeaderRecipe.vue";
import { useSearchRecipe } from "/src/stores/search.js";
import { useRoute } from "vue-router";
import {useGsapElement} from "src/composable/useGsapElement.js"

const { up, showEl } = useGsapElement();

const route = useRoute();

const store = useSearchRecipe();
const infoRecipe = ref("");

const calculationCal = computed(() => {
  return Math.round(
    infoRecipe.value.recipe.calories / infoRecipe.value.recipe.yield
  );
});
const calculationG = computed(() => {
  return Math.round(infoRecipe.value.recipe.totalWeight);
});
onBeforeMount(() => {
  console.log(store.recipes[Number(route.params.idRecipe)]);
  infoRecipe.value = store.recipes[Number(route.params.idRecipe)];
});
onMounted(() => {
  up();
  showEl();
})
</script>

<style scoped>
.page-detailed {
  background: #11151e;
  padding-top: 120px;
}
.img-recipe-info {
  border-radius: 50%;
  width: 500px;
}
.img-info-wraper {
  display: flex;
  justify-content: center;
}
.cal-info-wraper {
  border: 1px solid #ffe598;
  max-width: 500px;
  margin: auto;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
}
.cal-info {
  color: #ffe598;
  font-size: 16px;
}
.title-detailed {
  color: #ffe598;
  text-align: center;
  margin: 40px 0 20px 0;
}
.discription-txt {
  color: #fff;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
}
.discription-wraper {
  margin: auto;
  max-width: 500px;
  margin-top: 20px;
}
.link-detail {
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  background: #00796b;
  border-radius: 3px;
  width: fit-content;
  margin: auto;
  font-size: 16px;
  margin-top: 20px;
}
</style>
