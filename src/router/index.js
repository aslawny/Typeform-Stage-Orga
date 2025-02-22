import {createWebHistory, createRouter } from "vue-router"; 

import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import SignIn from "@/views/SignIn.vue";
import Sondages from "@/views/Sondages.vue";
import About from "@/views/About.vue";
import WIP from "@/views/WIP.vue";
import NotFound from "@/views/NotFound.vue";



const routes = [{
    path: "/",
    name: "Home",
    component: Home,
},
{
    path: "/login",
    name: "Login",
    component: Login,
},
{
    path: "/signin",
    name: "SignIn",
    component: SignIn,
},
{
    path: "/sondages",
    name: "Sondages",
    component: Sondages,
},
{
    path: "/about",
    name: "About",
    component: About,
},
{
    path: "/wip",
    name: "WIP",
    component: WIP,
},
{
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;