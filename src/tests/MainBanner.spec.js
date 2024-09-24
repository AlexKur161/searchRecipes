import { describe, expect, it, beforeEach, vi } from "vitest";
import component from "/src/layouts/MainBanner.vue"
import { mount, config, flushPromises } from "@vue/test-utils";

config.global.mocks = {
  $t: (tKey) => tKey,
};
describe("CountryTabs", () => {
  it("", async () => {
    const wrapper = mount(component, {
        global: {
       stubs: ["router-link"]
        },
       });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
