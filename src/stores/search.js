import { defineStore } from "pinia";
import { getRecipe } from "../axios/index.js";
import { ref, computed, reactive } from "vue";

export const useSearchRecipe = defineStore("search", () => {
  const nameSearch = ref("");
  const recipes = ref([]);

  async function searchAction() {
    console.log("test1");
    if (nameSearch.value !== "") {
      console.log("test");
      const response = await getRecipe("&q=" + nameSearch.value);
      recipes.value = response;
      console.log(response);
    } else {
      getRecipe("");
    }
  }
  function changeName(name) {
    nameSearch.value = name;
  }

  return { searchAction, nameSearch, changeName, recipes };
});
