import { defineStore } from "pinia";
import { getRecipe } from "../services/recipe";
import { ref } from "vue";
import { Card } from "src/types/index.ts";

export const useSearchRecipe = defineStore("search", () => {
  const recipes = ref<Card[]>([]);

  const visible = ref<boolean>(false);

  async function searchAction(
    name: string,
    diet?: string,
    health?: string,
    meal?: string
  ) {
    visible.value = true;
    const response = await getRecipe(name, diet, health, meal);
    response.hits.forEach(
      (item: Card) => (item.id = globalThis.crypto.randomUUID())
    );
    recipes.value = response.hits;
    visible.value = false;
  }
  return { searchAction, recipes, visible };
});
