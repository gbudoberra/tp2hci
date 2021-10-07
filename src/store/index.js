import Vue from 'vue'
import Vuex from 'vuex'
import security from "@/store/modules/security";
import routines from "@/store/modules/routines";
import excercises from "@/store/modules/excercises";
import sport from "@/store/modules/sport";

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //data
  },
  mutations: {
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
