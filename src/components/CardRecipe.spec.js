import { describe, expect, it, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useSearchRecipe } from "/src/stores/search.js";
import component from "./CardRecipe.vue";
import { mount } from "@vue/test-utils";

describe('CardRecipe', ()=> {
    beforeEach(async () => {
        setActivePinia(createPinia());
        const store = useSearchRecipe()
        await store.searchAction("&q=chicken");
    })
    it('', async () => {
        const wrapper = mount(component)
        expect(wrapper.exists()).toBe(true);
    })
})

