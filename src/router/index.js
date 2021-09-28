import Vue from "vue";
import VueRouter from "vue-router";
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
    path: "/profile",
    name:"Profile",
    component: () => import( /* webpackChunkName: "profile" */ '../views/profile')
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () => import( /* webpackChunkName: "favs" */ '../views/favorites')
  },
  {
    path: "/MyRoutines",
    name: "MyRoutines",
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
  // {
    // path: '/notFound'
  //   alias: '*',
  //   name: 'notFound',
  //   component: notFound,
  // }
];

const router = new VueRouter(
    {
      mode: "history",
      routes,
    }
);

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


