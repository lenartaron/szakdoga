import { mount } from "@vue/test-utils";
import { describe, test, expect, beforeEach, vi } from "vitest";
import { createPinia } from "pinia";
import CreateEventModal from "@/components/CreateEvent.vue";

describe("CreateEvent.vue", () => {
    let pinia;
    let wrapper;

    beforeEach(() => {
        pinia = createPinia(); 
        
        wrapper = mount(CreateEventModal, {
            global: {
                plugins: [pinia]
            }
        });
    });

    test("Modális ablak megnyílik és bezáródik", async () => {
        expect(wrapper.find(".modal-overlay").exists()).toBe(false);
        await wrapper.find(".create-button").trigger("click"); 
        await wrapper.vm.$nextTick();
        expect(wrapper.find(".modal-overlay").exists()).toBe(true);
        await wrapper.find(".close").trigger("click");
        expect(wrapper.find(".modal-overlay").exists()).toBe(false);
    });
});