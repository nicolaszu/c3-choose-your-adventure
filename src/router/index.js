import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/Welcome.vue";
import Instructions from "../views/Instructions.vue";
import VideoSelection from "../views/VideoSelection.vue";
import VideoPlayer from "../views/VideoPlayer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/instructions",
    name: "Instructions",
    component: Instructions,
  },
  {
    path: "/select",
    name: "select",
    component: VideoSelection,
  },
  {
    path: "/play",
    name: "play",
    component: VideoPlayer,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
