import { describe, expect, it, beforeEach, vi } from "vitest";
import { mount, config, flushPromises } from "@vue/test-utils";
import component from "./FiltersSection.vue";
import { setActivePinia, createPinia } from "pinia";
import { useSearchRecipe } from "../stores/search";
import { createI18n } from 'vue-i18n'

describe("FiltersSection", () => {
  beforeEach(()=> {
    setActivePinia(createPinia());
  })
  it("", async () => {
    const store = useSearchRecipe();
    const i18n = createI18n({
      legacy: false
    })
    console.log('store.recipes', store.recipes)
    const wrapper = mount(component, {
      global: {
        plugins: [i18n]
      }
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
