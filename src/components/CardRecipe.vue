<template>
  <router-link
    v-if="cardId !== undefined"
    :to="{ name: 'detailedRecipe', params: { idRecipe: cardId } }"
    class="card-wraper card_animation"
  >
    <div class="wraper-img">
      <q-skeleton class="skeleton" v-show="!isLoad" type="circle" />
      <img
        @load="loadImage"
        class="img_card"
        :src="recipe.recipe.image"
        alt="food"
      />
    </div>
    <div class="discription-wraper">
      <h3 class="title-card">{{ recipe.recipe.label }}</h3>
      <div class="wraper-calg row">
        <p class="text_yellow g-fod">{{ calculationG }} g</p>
        <p class="text_yellow cal-fod">{{ calculationCal }} cal</p>
        <p class="text_yellow time-fod">{{ recipe.recipe.totalTime }} min</p>
        <p class="text_yellow time-fod">
          {{ props.recipe.recipe.yield }} servings
        </p>
      </div>
      <div class="ingredient-wrap row">
        <p
          v-for="(ingredient, i) in recipe.recipe.ingredientLines"
          :key="i"
          class="ingredient-text"
        >
          {{ ingredient }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onBeforeUpdate } from "vue";
import { useGsapElement } from "/src/composable/useGsapElement.js";

const { cardAnimation } = useGsapElement();

const props = defineProps({
  recipe: Object,
  cardId: Number,
});
const isLoad = ref(false);

function loadImage() {
  isLoad.value = false;
  setTimeout(() => {
    isLoad.value = true;
  });
}
const calculationCal = computed(() => {
  return Math.round(props.recipe.recipe.calories / props.recipe.recipe.yield);
});
const calculationG = computed(() => {
  return Math.round(props.recipe.recipe.totalWeight);
});

onBeforeUpdate(() => {
  cardAnimation();
});
</script>

<style scoped>
.card-wraper {
  border-radius: 30px;
  background: #171d2b;
  width: calc(50% - 15px);
  height: 300px;
  display: flex;
  align-items: center;
  padding: 30px;
  gap: 30px;
  text-decoration: none;
}
.img_card {
  border-radius: 180px;
  max-width: 250px;
  height: 100%;
}
.wraper-calg {
  gap: 20px;
}
.title-card {
  color: #fff;
  font-size: 36px;
  white-space: nowrap;
  overflow-x: hidden;
  width: 300px;
  text-overflow: ellipsis;
}
.ingredient-wrap {
  overflow: hidden;
}
.ingredient-text {
  color: #fff;
}
.discription-wraper {
  overflow: hidden;
  height: 100%;
}
.wraper-img {
  height: 100%;
  position: relative;
}
.skeleton {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 1200px) and (min-width: 1000px) {
  .img_card {
    width: 150px;
    height: auto;
  }
  .card-wraper {
    height: 250px;
  }
}
@media (max-width: 999px) {
  .card-wraper {
    width: 100%;
  }
}
@media (max-width: 609px) {
  .img_card {
    width: 110px;
    height: auto;
  }
  .title-card {
    font-size: 18px;
    width: auto;
    line-height: 130%;
    margin-bottom: 5px;
  }
  .wraper-calg {
    gap: 8px;
  }
  .wraper-calg .text_yellow {
    margin-bottom: 0;
    font-size: 11px;
  }
  .card-wraper {
    width: 100%;
    height: 150px;
    gap: 15px;
    padding: 20px 30px;
  }
  .ingredient-text {
    font-size: 12px;
    margin-bottom: 5px;
  }
}
</style>
