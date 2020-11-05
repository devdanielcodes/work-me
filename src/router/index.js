import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/get_started",
    name: "GetStarted",
    component: () => import("../views/GetStarted.vue")
  },
  {
    path: "/beginner",
    name: "Beginner",
    component: () => import("../workoutViews/beginner.vue")
  },
  {
    path: "/advance",
    name: "Advance",
    component: () => import("../workoutViews/advance.vue")
  },
  {
    path: "/pro",
    name: "Pro",
    component: () => import("../workoutViews/pro.vue")
  },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
