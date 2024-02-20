import { defineStore } from "pinia";
import { getRecipe } from "../axios/index.js";
import { ref, computed, reactive } from "vue";

export const useSearchRecipe = defineStore("search", () => {
  const recipes = ref([]);

  async function searchAction(name, diet, health, meal) {
    console.log("test1", diet);
    const response = await getRecipe(name, diet, health, meal);
    recipes.value = response;
    console.log(response);
  }

  return { searchAction, recipes };
});
