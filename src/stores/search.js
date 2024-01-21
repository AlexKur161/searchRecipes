import { defineStore } from "pinia";
import { getRecipe } from "../axios/index.js";

export const useSearchRecipe = defineStore("search", {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    searchAction() {
      getRecipe();
    },
  },
});
