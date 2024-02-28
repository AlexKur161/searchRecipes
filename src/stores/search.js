import { defineStore } from "pinia";
import { getRecipe, nextPage } from "../axios/index.js";
import { ref, computed, reactive } from "vue";

export const useSearchRecipe = defineStore("search", () => {
  const recipes = ref([]);
  const visible = ref(false);
  const prev = ref("");
  const next = ref("");

  async function searchAction(name, diet, health, meal) {
    visible.value = true;
    const response = await getRecipe(name, diet, health, meal);
    recipes.value = response.hits;
    next.value = response._links.next.href;
    visible.value = false;
  }
  async function pageAction(link) {
    visible.value = true;
    const response = await nextPage(link);
    recipes.value = response.hits;
    console.log("проверить условие", next.value !== "");

    prev.value = next.value;
    console.log("next old", next.value);
    console.log("prev old", prev.value);
    console.log("response._links.next.href", response._links.next.href);

    next.value = response._links.next.href;
    console.log("next new", next.value);
    console.log("prev new", prev.value);
    visible.value = false;
  }
  return { searchAction, recipes, visible, prev, next, pageAction };
});
