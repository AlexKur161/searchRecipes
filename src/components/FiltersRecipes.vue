<template>
  <div class="filter-wrap row">
    <q-input
      rounded
      class="select-filter"
      color="teal-8"
      bg-color="white"
      style="max-width: 400px"
      v-model="filterName"
      label="the name of the recipe"
    />
    <q-select
      class="select-filter"
      color="teal-8"
      v-model="selectedDiet"
      :options="diet"
      emit-value
      map-options
      bg-color="white"
      label="Diet Labels"
      transition-show="scale"
      transition-hide="scale"
    ></q-select>
    <q-select
      class="select-filter"
      color="teal-8"
      v-model="selectedMeal"
      :options="mealTypes"
      emit-value
      map-options
      bg-color="white"
      label="Meal time"
      transition-show="scale"
      transition-hide="scale"
    ></q-select>
    <q-select
      class="select-filter"
      color="teal-8"
      v-model="selectedHealth"
      :options="healthLabels"
      emit-value
      map-options
      bg-color="white"
      label="Health"
      transition-show="scale"
      transition-hide="scale"
    ></q-select>
    <q-btn
      dense
      round
      size="20px"
      flat
      icon="tune"
      color="teal-8"
      @click="searchRecipe"
    />
    <q-btn color="teal-8" @click="searchRecipe" :label="$t('Search')" />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useSearchRecipe } from "../stores/search.js";
import { computed } from "vue";

const filterName = ref("");
const store = useSearchRecipe();
const selectedDiet = ref("");
const selectedMeal = ref("");
const selectedHealth = ref("");
const diet = reactive([
  {
    label: "Balanced",
    value: "&diet=balanced",
  },
  {
    label: "High-Fiber",
    value: "&diet=high-fiber",
  },
  {
    label: "High-Protein",
    value: "&diet=high-protein",
  },
  {
    label: "Low-Carb",
    value: "&diet=low-carb",
  },
  {
    label: "Low-Fat",
    value: "&diet=low-fat",
  },
  {
    label: "Low-Sodium",
    value: "&diet=low-sodium",
  },
]);

const mealTypes = reactive([
  {
    label: "Breakfast",
    value: "&mealType=breakfast",
  },
  {
    label: "Brunch",
    value: "&mealType=brunch",
  },
  {
    label: "Dinner",
    value: "&mealType=Dinner",
  },
  {
    label: "Snack",
    value: "&mealType=snack",
  },
  {
    label: "Teatime",
    value: "&mealType=teatime",
  },
]);
const healthLabels = reactive([
  {
    label: "Alcohol-Cocktail",
    value: "&health=alcohol-cocktail",
  },
  {
    label: "Alcohol-Free",
    value: "&health=alcohol-free",
  },
  {
    label: "Celery-Free",
    value: "&health=celery-free",
  },
  {
    label: "Crustcean-Free",
    value: "&health=crustacean-free",
  },
  {
    label: "Dairy-Free",
    value: "&health=dairy-free",
  },
  {
    label: "Egg-Free",
    value: "&health=egg-free",
  },
  {
    label: "Fish-Free",
    value: "&health=fish-free",
  },
  {
    label: "Immuno-Supportive",
    value: "&health=immuno-supportive",
  },
  {
    label: "No oil added",
    value: "&health=no-oil-added",
  },
  {
    label: "Vegetarian",
    value: "&health=vegetarian",
  },
]);

const filterNameLink = computed(() => {
  if (filterName.value !== "") {
    return "&q=" + filterName.value;
  } else {
    return "";
  }
});
function searchRecipe() {
  store.searchAction(
    filterNameLink.value,
    selectedDiet.value,
    selectedHealth.value,
    selectedMeal.value
  );
}
</script>

<style scoped>
.filter-wrap {
  gap: 30px;
  justify-content: space-between;
  padding: 60px 0;
}
.select-filter {
  width: 225px;
}
</style>
