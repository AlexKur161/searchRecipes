import { describe, expect, it, beforeEach, vi } from "vitest";
import component from "./FooterRecipe.vue";
import { mount, config, flushPromises } from "@vue/test-utils";

config.global.mocks = {
  $t: (tKey) => tKey,
};
describe("CountryTabs", () => {
  it("", async () => {
    const wrapper = mount(component);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
