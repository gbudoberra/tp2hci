import {RoutinesApi} from "@/api/routines";
import {FavoritesApi} from "../../api/favorites";
import {store} from "../index";

export default {

    state:{
        routines: [],
        routinesPage: 0,
        isRoutinesLast: false,
        routine: null

    },
    mutations: {
        push(state, routine) {
            state.routines.push(routine)
        },
        replace(state, index, routine) {
            state.routines[index] = routine
        },
        splice(state, index) {
            state.routines.splice(index, 1)
        },
        replaceAll(state, routines) {
            state.routines = routines
        },
        loading(state){
            state.Loading = !state.Loading;
        },
        replaceRoutine(state, routine){
            state.routine = routine
        },
        nextPageRoutines(state){
            console.log(state.routinesPage, 'page')
            if(!state.isRoutinesLast){
                state.routinesPage++
            }
            console.log(state.routinesPage, 'pageNow')
        },
        prevPageRoutines(state){
            if(state.routinesPage>0){
                state.routinesPage--
            }
        },
        setRoutinesLastPage(state, bool){
            state.isRoutinesLast = bool
        },
        resetPage(state){
            state.isRoutinesLast = false
            state.routinesPage = 0
        }

    },
    getters: {
        findIndex(state) {
            return (routine) => {
                return state.routines.findIndex(item => item.id === routine.id)
            }
        },
    },
    actions:{
        async create(state, routine) {
            return await RoutinesApi.add(routine)
        },

        async modify({getters, commit}, routine) {
        const result = await RoutinesApi.modify(routine)
        const index = getters.findIndex(result)
        if (index >= 0)
            commit('replace', index, result)
        return result
        },
        async delete({getters, commit}, routine) {
            await RoutinesApi.delete(routine.id)
            const index = getters.findIndex(routine)
            if (index >= 0)
                commit('splice', index)
        },
        async getRoutine({commit}, payload, controller) {
            const result = await RoutinesApi.get(payload.routineId, controller)
            commit('replaceRoutine', result)
            console.log('result routine', result)
            // return result
        },
        async getAllRoutines({commit, state}, controller) {
            const result = await RoutinesApi.getAll(state.routinesPage, controller)
            commit('replaceAll', result)
            commit('setRoutinesLastPage', result.isLastPage)
            console.log('result',result)
        },
        async getMyRoutines({commit, state},controller){
            const result = await RoutinesApi.getMyRoutines(state.routinesPage, controller)
            commit('replaceAll', result)
            commit('setRoutinesLastPage', result.isLastPage)
            console.log('result',result)
        },


        async getAllFavorites({commit}, controller) {
            const result = await RoutinesApi.getAllFavorites(controller)
            commit('replaceAll', result)
            commit('setRoutinesLastPage', result.isLastPage)
            console.log('result',result)
        },
        async favRoutine({state}, payload){
            await FavoritesApi.fav(payload.id)
            console.log(state)
        },
        async unFavRoutine({state}, payload){
            const result = await FavoritesApi.unFav(payload.id)
            console.log(result)
            console.log(state)
        },

    }
}

