import {RoutinesApi} from "@/api/routines";
import {store} from "../index";

export default {

    state:{
        routinePage: 0,
        routines: [],
        favoritesPage: 0,
        favorites: [],
        Loading: false,
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
        replaceAllFavorites(state, routines) {
            state.favorites = routines
        },
        loading(state){
            state.Loading = !state.Loading;
        },
        replaceRoutine(state, routine){
            state.routine = routine
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
        // async create(routine) {
        //     await RoutinesApi.add(routine, null)
        // },
        async create(state, exercise) {
            return await RoutinesApi.add(exercise)
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
        async get(routineId, controller) {
            const result = await RoutinesApi.get(routineId, controller)
            store.commit('replaceRoutine', result)
            console.log('result routine', result)
            return result
        },
        async getAll(controller) {
            const result = await RoutinesApi.getAll(controller)
            store.commit('replaceAll', result)
            console.log('result',result)
        },
        async getMyRoutines(controller){
            const result = await RoutinesApi.getMyRoutines(controller)
            store.commit('replaceAll', result)
            console.log('result',result)
        },
        async getAllFavorites(controller) {
            const result = await RoutinesApi.getAllFavorites(controller)
            store.commit('replaceAllFavorites', result)
            console.log('result',result)
        },

        load(){
            store.commit('loading')
        }

    }
}

