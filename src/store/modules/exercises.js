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
            const result = await ExerciseApi.getFromCycle(payload.id)
            commit('replaceAllExercises', result)
            console.log('result exercises', result)
            return result
        }


    }

}