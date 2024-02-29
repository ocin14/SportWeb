import HomeVue from "@/components/Home.vue";
import registerVue from "@/components/register.vue";
import { createRouter, createWebHistory } from "vue-router";
import loginVue from "./components/login.vue";
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
    {
        name:'login',
        component:loginVue,
        path:'/login',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;