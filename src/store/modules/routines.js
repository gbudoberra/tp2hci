import {RoutinesApi} from "@/api/routines";
import {store} from "../index";

export default {

    state:{
        routinePage: 0,
        routines: [],
        favoritesPage: 0,
        favorites: [],
        Loading: false

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
        }

    },
    getters: {
    },
    actions:{
        async create({getters, commit}, routine) {
            const result = await RoutinesApi.add(routine)
            if (!getters.findIndex(result))
                commit('push', result)
            return result
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
        async get({state, getters, commit}, sport) {
            const index = getters.findIndex(sport)
            if (index >= 0)
                return state.items[index]

            const result = await RoutinesApi.get()
            commit('push', result)
            return result
        },
        async getAll(controller) {
            const result = await RoutinesApi.getAll(controller)
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