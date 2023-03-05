import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteComponent,
} from "vue-router";

const HomePage = (): Promise<RouteComponent> =>
  import("@/views/home/HomePage.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/",
    component: HomePage,
  },
];

const scrollToPoint = (
  x: number,
  y: number,
  behavior: ScrollBehavior | undefined = "auto"
): void => {
  setTimeout(() => {
    // Не работает на firefox, решается с помощью setTimeout
    window.scrollTo({
      left: x,
      top: y,
      behavior: behavior,
    });
  }, 100);
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      const container = document.getElementById(to.hash.slice(1));
      const coordinateY = container ? container.offsetTop : 0;
      scrollToPoint(0, coordinateY, "smooth");
    } else scrollToPoint(0, 0, "smooth");
  },
  routes,
});

// router.beforeEach((to) => {
//   if (to.meta.requiresAuth && !EX_$User.isSomeLogin) {
//     return {
//       path: "/",
//     };
//   }
// });

export default router;
