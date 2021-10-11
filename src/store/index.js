import Vue from 'vue'
import Vuex from 'vuex'
import security from "./modules/security";
import routines from "./modules/routines";
import excercises from "./modules/excercises";
import sport from "./modules/sport";

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: { //data
    userLogin: null,
    passwordLogin: null,
    isLoggedIn: false,
  },
  mutations: {
    setIsLoggedIn(state, loggedIn){
      state.isLoggedIn = loggedIn;
    },
  },
  getters:{
    get: state => {return state.Loading}
  },
  actions: { //methods
  },
  modules: {
    security,
    routines,
    excercises,
    sport
  }
})
