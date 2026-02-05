import { createRouter, createWebHashHistory } from "vue-router";
import myMain from "@/views/myMain.vue";
import AboutPage from "@/views/AboutPage.vue";
const routes = [
  {
    name: "my-main",
    path: "/",
    component: myMain,
  },
  {
    name: "about-page",
    path: "/about",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
