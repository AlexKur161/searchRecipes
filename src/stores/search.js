import { defineStore } from "pinia";
import { getRecipe } from "../axios/index.js";
import { ref } from "vue";

export const useSearchRecipe = defineStore("search", () => {
  const recipes = ref([]);
  const visible = ref(false);

  async function searchAction(name, diet, health, meal) {
    visible.value = true;
    const response = await getRecipe(name, diet, health, meal);
    recipes.value = response.hits;
    visible.value = false;
  }
  return { searchAction, recipes, visible };
});
