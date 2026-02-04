import { createRouter, createWebHashHistory } from "vue-router";
import myMain from "@/views/myMain.vue";
const routes = [
  {
    name: "my-main",
    path: "/",
    component: myMain,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
