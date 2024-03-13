import { defineStore } from "pinia";
import { getRecipeCountry } from "/src/axios/index.js";
import { ref, computed, reactive } from "vue";

export const useCountryRecipe = defineStore("country", () => {
  const recipesCountry = ref([]);
  const visible = ref(false);

  async function countryAction(country) {
    visible.value = true;
    const response = await getRecipeCountry(country);
    recipesCountry.value = response;
    visible.value = false;
  }

  return { countryAction, recipesCountry, visible };
});
