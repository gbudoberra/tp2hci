import Vue from "vue";
import VueRouter from "vue-router";
import Favorites from "../views/favorites.vue";
import Profile from "../views/profile.vue";
import MyRoutines from "../views/myRoutines.vue";
import Explore from "../views/explore.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:"/explore",
    name:"Explore",
    component: Explore
  },
  {
    path: "/profile",
    name:"Profile",
    component: Profile
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites
  },
  {
    path: "/MyRoutines",
    name: "MyRoutines",
    component: MyRoutines
  }
];

const router = new VueRouter(
    {
      routes
    }
);

export default router;

