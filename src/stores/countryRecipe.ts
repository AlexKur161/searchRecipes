import { defineStore } from "pinia";
import { getRecipeCountry } from "../services/recipeCountry";
import { ref } from "vue";
import { Card } from "src/types";

export const useCountryRecipe = defineStore("country", () => {
  const recipesCountry = ref<Card[]>([]);
  const visible = ref<boolean>(false);

  async function countryAction(country: string) {
    visible.value = true;
    const response = await getRecipeCountry(country);
    response.forEach(
      (item: Card) => (item.id = globalThis.crypto.randomUUID())
    );
    recipesCountry.value = response;
    visible.value = false;
  }

  return { countryAction, recipesCountry, visible };
});
