import HomeVue from "@/components/Home.vue";
import registerVue from "@/components/register.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes=[
    {
        name:'Home',
        component:HomeVue,
        path:'/',
    },
    {
        name:'SignUp',
        component:registerVue,
        path:'/SignUp',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;