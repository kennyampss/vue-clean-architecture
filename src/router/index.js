import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(function (to, from, next) {
  // if (to.meta.auth) {
  //   if (auth.hasToken()) {
  //     if (to.name == "Login") {
  //       next("/base/dashboard");
  //       return;
  //     }
  //     next();
  //   } else {
  //     next("/login");
  //   }
  // } else {
  //   if (auth.hasToken()) {
  //     if (to.name == "Login") {
  //       next("/base/dashboard");
  //       return;
  //     }
  //   }
  // }
  next();
});

export default router;
