import { describe, expect, it, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useSearchRecipe } from "/src/stores/search.js";
import component from "./CardRecipe.vue";
import { mount } from "@vue/test-utils";

describe("CardRecipe", () => {
  beforeEach(async () => {
    setActivePinia(createPinia());
    const store = useSearchRecipe();
    await store.searchAction("&q=chicken");
  });
  it("", async () => {
    const wrapper = mount(component, {
      props: {
        recipe: {
          recipe: {
            calories: 2253.101981306866,
            yield: 6,
            image: "test",
            totalWeight: 1179.6109942806097,
          },
        },
        cardId: 0,
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.vm.calculationCal).toBeTypeOf("number");
    expect(wrapper.vm.calculationCal).toBe(376);
    expect(wrapper.vm.calculationG).toBeCloseTo(1180, 1);
  });
});
