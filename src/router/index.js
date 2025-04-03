import { createRouter, createWebHistory } from "vue-router";
import Regin from "../components/Regin.vue"
import EventCard from "../components/EventCard.vue";
import Details from "../components/Details.vue";

const routes = [
    {
        path: "/", 
        component: EventCard,
    },
    {
        path: "/regin", 
        component: Regin,
    },
    {
        path: "/details",
        component: Details,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})



export default router;