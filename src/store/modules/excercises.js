import {ExerciseApi} from "@/api/exercises";
import {RoutinesApi} from "@/api/routines";


export default {
    state:{
        excercises: []
    },
    mutations: {
        push(state, excercise) {
            state.routines.push( excercise)
        },
        replace(state, index,  excercise) {
            state.routines[index] =  excercise
        },
        splice(state, index) {
            state.routines.splice(index, 1)
        },
        replaceAll(state, excercises) {
            state.routines = excercises
        }
    },
    getters: {
        findIndex(state) {
            return (excercise) => {
                return state.items.findIndex(item => item.id === excercise.id)
            }
        },


    },
    actions:{
        async create({getters, commit}, excercise) {
            const result = await ExerciseApi.add(excercise)
            if (!getters.findIndex(result))
                commit('push', result)
            return result
        },

        async modify({getters, commit}, excercise) {
            const result = await ExerciseApi.modify(excercise)
            const index = getters.findIndex(result)
            if (index >= 0)
                commit('replace', index, result)
            return result
        },
        async delete({getters, commit}, excercise) {
            await ExerciseApi.delete(excercise.id)
            const index = getters.findIndex(excercise)
            if (index >= 0)
                commit('splice', index)
        },
        async get({state, getters, commit}, excercise) {
            const index = getters.findIndex(excercise)
            if (index >= 0)
                return state.items[index]

            const result = await ExerciseApi.get()
            commit('push', result)
            return result
        },
        async getAll({commit}, controller) {
            const result = await ExerciseApi.getAll(controller)
            commit('replaceAll', result)
            return result
        }

    }

}