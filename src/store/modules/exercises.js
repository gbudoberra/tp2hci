import {ExerciseApi} from "../../api/exercises";



export default {
    state:{
        exercises: [],
        exercisePage: 0,
        exerciseLastPage: false,
        cycleExercisesPage: 0,
        cycleExercisesLastPage: false
    },
    mutations: {
        replaceAllExercises(state, result) {
            state.exercises = result
        },
        pushExercise(state, exercise){
            if(state.exercises){
                state.exercises.content.push(exercise);
            }
        },
        nextPageExercises(state){
            if(!state.exerciseLastPage){
                state.exercisePage++
            }
        },
        prevPageExercises(state){
            if(state.exercisePage>0){
                state.exercisePage--
            }
        },
        setExerciseLastPage(state, bool){
            state.exerciseLastPage = bool
        },
        setCycleExercisesLastPage(state, bool){
            state.cycleExercisesLastPage = bool
        },


    },
    getters: {
    },
    actions:{
        async getFromCycle({commit}, payload) {
            const result = await ExerciseApi.getFromCycle(payload.cycleId, payload.page)
            commit("setCycleExercisesLastPage", result.isLastPage)
            console.log('result exercises', result)
            return result
        },
        async getAllExercises({commit, state}, controller){
            const result = await ExerciseApi.getAll(state.exercisePage, controller)
            commit('replaceAllExercises', result)
            commit('setExerciseLastPage', result.isLastPage)
            console.log(result.isLastPage)
            console.log('result getAll exercises', result)
            return result
        },
        async newExercise({dispatch},payload){
            const result = await ExerciseApi.add(payload.name, payload.detail, payload.type)
            dispatch('getAllExercises')
            console.log('result newExercise', result)
            return result
        },
        async exerciseNextPage({commit, dispatch, state}){
            commit('nextPageExercises');
            dispatch('getAllExercises')
            console.log('nextPageExercises', state.exercisePage)
        },
        async exercisePrevPage({commit, dispatch, state}){
            commit('prevPageExercises');
            dispatch('getAllExercises')
            console.log('prevPageExercises', state.exercisePage)
        },
        async deleteExercise({dispatch, state, commit}, payload){
            await ExerciseApi.delete(payload.id)
            let bool = state.exerciseLastPage && state.exercises.content.length===1
            console.log('bool', bool)
            console.log('lastPage', state.exerciseLastPage)
            console.log('length', state.exercises.content.length)
            if(bool)
                commit('prevPageExercises')
            dispatch("getAllExercises")
        },
        async modifyExercise({dispatch}, payload){
            await ExerciseApi.modify(payload.id, payload.name, payload.detail, payload.type)
            dispatch('getAllExercises')
        }

    }

}