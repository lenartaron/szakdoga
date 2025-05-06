import { mount } from "@vue/test-utils";
import { describe, test, expect, beforeEach, vi } from "vitest";
import { createPinia } from "pinia";
import { createRouter, createMemoryHistory } from "vue-router";
import Regin from "@/components/Regin.vue";

describe("Regin.vue component", () => {
    let pinia;
    let router;
    let wrapper;

    beforeEach(() => {
        pinia = createPinia();
        router = createRouter({
            history: createMemoryHistory(),
            routes: [{ path: "/", component: Regin }]
        });

        wrapper = mount(Regin, {
            global: {
                plugins: [pinia, router]
            }
        });
    });

    // Render Tesztek
    describe("Rendering", () => {
        test("Renders correct header based on mode", async () => {
            router.push({ query: { mode: "login" } });
            await wrapper.vm.$nextTick();
            expect(wrapper.find("h2").text()).toBe("Belépés");

            router.push({ path: "/", query: { mode: "register" } }); 
            await router.isReady();
            await wrapper.vm.$nextTick();
            expect(wrapper.vm.mode).toBe("register");
        });

        test("Username input is only visible in register mode", async () => {
            router.push({ query: { mode: "login" } });
            await router.isReady();
            await wrapper.vm.$nextTick();
            console.log("Aktuális mode:", wrapper.vm.mode);
            expect(wrapper.vm.mode).toBe("login");

            router.push({ query: { mode: "register" } });
            await wrapper.vm.$nextTick();
            expect(wrapper.find("input[type='text']").exists()).toBe(true);
        });
    });

    // Interakciós Tesztek
    describe("User Interactions", () => {
        test("Triggers login or register method on form submit", async () => {
            const loginSpy = vi.spyOn(wrapper.vm, "login");
            const registerSpy = vi.spyOn(wrapper.vm, "register");

            router.push({ query: { mode: "login" } });
            await wrapper.vm.$nextTick();
            await wrapper.find("form").trigger("submit.prevent");
            expect(loginSpy).toHaveBeenCalled();

            router.push({ query: { mode: "register" } });
            await router.isReady();
            await wrapper.vm.$nextTick();
            console.log("Aktuális mode:", wrapper.vm.mode);
            expect(wrapper.vm.mode).toBe("register");
        });

        test("Mode switches correctly when clicking switchMode button", async () => {
            const switchButton = wrapper.find("button.btn-link");

            await switchButton.trigger("click");
            await wrapper.vm.$nextTick();
            expect(wrapper.vm.mode).toBe("register");

            await switchButton.trigger("click");
            await wrapper.vm.$nextTick();
            expect(wrapper.vm.mode).toBe("login");
        });
    });

    // Router és State tesztek
    describe("State and Router Behavior", () => {
        test("Properly updates mode based on query params", async () => {
            router.push({ query: { mode: "register" } });
            await router.isReady();
            await wrapper.vm.$nextTick();
            expect(wrapper.vm.mode).toBe("register");

            router.push({ query: { mode: "login" } });
            await wrapper.vm.$nextTick();

            // Kényszerített újramountolás
            await wrapper.unmount();
            wrapper = mount(Regin, { global: { plugins: [pinia, router] } });
            await wrapper.vm.$nextTick();
            expect(wrapper.vm.mode).toBe("login");
        });
    });
});