import Vue from "vue";
import VueRouter from "vue-router";
import profile from "../views/profile";
// import Favorites from "../views/favorites.vue";
// import Profile from "../views/profile.vue";
// import MyRoutines from "../views/myRoutines.vue";
// import Explore from "../views/explore.vue";

Vue.use(VueRouter);

const routes = [
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
    if(!profile.user){
      next({name:"Login"})
    }
    else next()
  } else {
    next()
  }
})

// router.beforeEach(
//     (to, from, next) => {
//       if(to.meta.requiresAuth){
//         // login
//       } else {
//         next()
//       }
//     }
// )

export default router;


