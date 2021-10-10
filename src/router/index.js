import Vue from "vue";
import VueRouter from "vue-router";
import {store} from "../store/index";
// import profile from "../store/user";
// import Favorites from "../views/favorites.vue";
// import Profile from "../views/profile.vue";
// import MyRoutines from "../views/myRoutines.vue";
// import Explore from "../views/explore.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    name:"Explore",
    component: () => import( /* webpackChunkName: "explore" */ '../views/explore')
  },
    {
    path:"/explore",
    name:"Explore",
    component: () => import( /* webpackChunkName: "explore" */ '../views/explore')
  },
  {
    path:"/login",
    name:"Login",
    component: () => import( /* webpackChunkName: "Login" */ '../views/Login')
  },
  {
    path: "/settings",
    name:"Settings",
    meta: { requiresAuth: true},
    component: () => import( /* webpackChunkName: "settings" */ '../views/settings'),

  },

  {
    path: "/profile",
    name:"Profile",
    meta: { requiresAuth: true},
    component: () => import( /* webpackChunkName: "profile" */ '../views/profile'),

  },
  {
    path: "/favorites",
    name: "Favorites",
    meta: { requiresAuth: true},
    component: () => import( /* webpackChunkName: "favs" */ '../views/favorites')
  },
  {
    path: "/MyRoutines",
    name: "MyRoutines",
    meta: { requiresAuth: true},
    component: () => import( /* webpackChunkName: "myRoutines" */ '../views/myRoutines')
  },
  {
    path: "/details/:id",
    name: "routineDetails",
    //meta: requiresAuth
    props: true,
    // beforeEnter: (to, from, next) => {
    //   const exists = store.routine.find(
    //       routine => routine.id === to.params.id
    //   )
    //   if(exists){
    //     next()
    //   } else {
    //     next({name: 'notFound'})
    //   }
    // },
    component: () => import( /* webpackChunkName: "details" */ '../views/routineDetails'),
  },
  {
    path: '/notFound',
    alias: '*',
    name: 'notFound',
    component: () => import( /* webpackChunkName: "404 Not Found" */ '../views/NotFound'),
  }
];

const router = new VueRouter(
    {
      mode: "history",
      routes,
    }
);

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth){
    if(!store.state.isLoggedIn){
      next({name:"Login" /*, query: { redirect: to.fullPath }*/ })
    }
    else next()
  } else {
    next()
  }
})
// vue add vuex
// router.beforeEach(
//     (to, from, next) => {
//       if(to.meta.requiresAuth){
//         next({name:"Login" /*, query: { redirect: to.fullPath }*/ })
//       } else {
//         next()
//       }
//     }
// )

export default router;


