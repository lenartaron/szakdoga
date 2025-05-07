import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import EventCard from "@/components/EventCard.vue";

describe("EventCard.vue", () => {
    test("Helyesen jeleníti meg az esemény részleteit", () => {
        date: new Date(2025, 4, 10, 14, 0) // Év, hónap (nullától kezdődik), nap, óra, perc
        const event = {
            title: "Vue Konferencia",
            is_private: true,
            organizer: "https://example.com/profile.png",
            location: "Budapest",
            description: "Egy nagyszerű esemény!",
            date: "2025-05-10T14:00:00Z"
        };
        
        const wrapper = mount(EventCard, { props: { event } });


        expect(wrapper.find("h3").text()).toBe("Vue Konferencia");
        expect(wrapper.find(".private-badge").exists()).toBe(true);
        expect(wrapper.find("img").attributes("src")).toBe(event.organizer);
        expect(wrapper.find(".event-meta").text()).toContain("2025. május 10.");
        expect(wrapper.find(".event-meta").text()).toContain("Budapest");
        console.log("Kapott szöveg:", wrapper.find("p").text());
        expect(wrapper.find(".content > p").text()).toContain("Egy nagyszerű esemény!");

    });

    test("elyesen navigál az esemény részleteihez", () => {
        const event = { title: "Vue Workshop" };
        const wrapper = mount(EventCard, { props: { event } });

        const link = wrapper.find("#reszletek");
        expect(link.attributes("to")).toBe("/details");
    });
});