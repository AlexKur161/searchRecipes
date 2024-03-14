import { describe, expect, it, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useCountryRecipe } from "/src/stores/countryRecipe";
import component from "./CountryTabs.vue";
import { mount, config, flushPromises } from "@vue/test-utils";

config.global.mocks = {
  $t: (tKey) => tKey,
};

describe("CountryTabs", () => {
  beforeEach(async () => {
    setActivePinia(createPinia());
  });
  it("", async () => {
    const wrapper = mount(component);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("count", async () => {
    const store = useCountryRecipe();
    const wrapper = mount(component);
    const country = {
      name: "Japan",
      bg: "japan-bg",
      field: "japanese",
      active: false,
    };
    wrapper.vm.countryActive(country);
    expect(country.active).toBe(true);
    expect(wrapper.vm.bgName).toBe(country.bg);
  });
});
