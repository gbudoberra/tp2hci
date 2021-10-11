import {ExerciseApi} from "@/api/exercises";


export default {
    state:{
        exercises: []
    },
    mutations: {
        push(state, exercise) {
            state.routines.push( exercise)
        },
        replace(state, index,  exercise) {
            state.routines[index] =  exercise
        },
        splice(state, index) {
            state.routines.splice(index, 1)
        },
        replaceAll(state, exercises) {
            state.routines = exercises
        }
    },
    getters: {
        // findIndex(state) {
        //     return (exercise) => {
        //         return state.exercises.findIndex(item => item.id === exercise.id)
        //     }
        // },


    },
    actions:{
        // async create({getters, commit}, exercise) {
        //     const result = await ExerciseApi.add(exercise)
        //     if (!getters.findIndex(result))
        //         commit('push', result)
        //     return result
        // },

        async modify({getters, commit}, exercise) {
            const result = await ExerciseApi.modify(exercise)
            const index = getters.findIndex(result)
            if (index >= 0)
                commit('replace', index, result)
            return result
        },
        async delete({getters, commit}, exercise) {
            await ExerciseApi.delete(exercise.id)
            const index = getters.findIndex(exercise)
            if (index >= 0)
                commit('splice', index)
        },
        async get({state, getters, commit}, exercise) {
            const index = getters.findIndex(exercise)
            if (index >= 0)
                return state.exercises[index]

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