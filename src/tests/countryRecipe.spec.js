import { setActivePinia, createPinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useCountryRecipe } from "./countryRecipe.js";

describe("test", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  // const mockRecipe =
  it("store", () => {
    const store = useCountryRecipe();
    expect(store.recipesCountry).toHaveLength(0);
  });
  it("countryArray", async () => {
    const store = useCountryRecipe();
    await store.countryAction("British");
    expect(store.recipesCountry.length).toBe(20);
  });
});
