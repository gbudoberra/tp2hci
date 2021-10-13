import {ExerciseApi} from "../../api/exercises";


export default {
    state:{
        exercises: [],
    },
    mutations: {
        replaceAllExercises(state, result) {
            state.exercises = result
        }
    },
    getters: {
    },
    actions:{
        async getFromCycle({commit}, payload) {
            const result = await ExerciseApi.getFromCycle(payload[0])
            commit('replaceAllExercises', result)
            console.log('result exercises', result)
            return result
        },
        async getAllExercises({commit}, controller){
            const result = await ExerciseApi.getAll(controller)
            commit('replaceAllExercises', result)
            console.log('result getAll exercises', result)
            return result
        }


    }

}