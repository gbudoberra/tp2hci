import Vue from 'vue'
import Vuex from 'vuex'
import security from "./modules/security";
import routines from "./modules/routines";
import excercises from "./modules/exercises";
import sport from "./modules/sport";
// import cycles from "./modules/cycles";

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: { //data
    userLogin: null,
    passwordLogin: null,

  },
  mutations: {

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
    sport,
    // cycles
  }
})
