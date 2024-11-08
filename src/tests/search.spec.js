import { describe, expect, it, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useSearchRecipe } from "./search.ts";

describe("search store test", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("test arraySearch", async () => {
    const store = useSearchRecipe();
    await store.searchAction("&q=chicken");
    expect(store.recipes).toHaveLength(20);
  });
});
