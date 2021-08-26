import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home/Index"),
    name: "login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // linkActiveClass: "active",
  // linkExactActiveClass: "exact-active",
});

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title =
    toRoute.meta && toRoute.meta.title ? toRoute.meta.title : "Home";

  next();
});

export default router;
