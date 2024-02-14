<template>
  <div class="card-wraper">
    <div class="wraper-img">
      <img class="img_card" :src="recipe.recipe.image" alt="" />
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
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
const props = defineProps({
  recipe: Object,
});

const calculationCal = computed(() => {
  return Math.round(props.recipe.recipe.calories / props.recipe.recipe.yield);
});
const calculationG = computed(() => {
  return Math.round(props.recipe.recipe.totalWeight);
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
}
.img_card {
  border-radius: 180px;
  max-width: 250px;
  max-height: 250px;
}
.wraper-calg {
  gap: 20px;
}
.title-card {
  color: #fff;
  font-size: 36px;
}
</style>
