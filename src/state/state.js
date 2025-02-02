import { Event } from "pinia";
import { ref } from "vue";

export const event = Event("events", () => {
    const greet = ref("hello");

    return { greet };
})