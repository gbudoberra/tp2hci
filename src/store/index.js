import Vue from 'vue'
import Vuex from 'vuex'
import security from "./modules/security";
import routines from "./modules/routines";
import exercises from "./modules/exercises";
import sport from "./modules/sport";
import cycles from "./modules/cycles";

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: { //data
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
    exercises,
    sport,
    cycles
  }
})
