import { defineStore } from "pinia";
import { getRecipeCountry } from "../axios/index.js";
import { ref, computed, reactive } from "vue";

export const useCountryRecipe = defineStore("country", () => {
  const recipesCountry = ref([]);

  async function countryAction(country) {
    console.log("test1", country);
    const response = await getRecipeCountry(country);
    recipesCountry.value = response;
    console.log(response);
  }

  return { countryAction, recipesCountry };
});
