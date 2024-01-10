import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "@/layouts/Main.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("@/views/Main.vue"),
      meta: { layout: MainLayout },
    },
    //404페이지
    {
      path: "/:anything(.*)",
      component: () => import("@/views/Page404.vue"),
    },
  ],
});

export default router;
