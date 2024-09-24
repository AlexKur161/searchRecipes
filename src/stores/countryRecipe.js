import { defineStore } from "pinia";
import { getRecipeCountry } from "../services/recipeCountry";
import { ref, computed, reactive } from "vue";

export const useCountryRecipe = defineStore("country", () => {
  const recipesCountry = ref([]);
  const visible = ref(false);

  async function countryAction(country) {
    visible.value = true;
    const response = await getRecipeCountry(country);
    response.forEach((item) => (item.id = window.crypto.randomUUID()));
    recipesCountry.value = response;
    visible.value = false;
  }

  return { countryAction, recipesCountry, visible };
});
