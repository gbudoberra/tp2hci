import {cyclesApi} from "../../api/cycles";


export default {
    state:{
        cycles: null,
        cyclesPage: 0,
        cyclesIsLast: false
    },
    mutations:{
        replaceAllCycles(state, cycles){
            state.cycles = cycles;
        },
        setCycleLastPage(state, bool){
            state.cyclesIsLast = bool
        },
        nextCyclePage(state){
            if(!state.cyclesIsLast)
                state.cyclesPage++
        },
        prevCyclePage(state){
            if(state.cyclesPage!==0)
                state.cyclesPage--
        },
        resetCyclePages(state){
            state.cyclesPage = 0
            state.cyclesIsLast = false
        }


    },
    actions:{
        async get({commit, state}, payload, controller){
            const result = await cyclesApi.getAll(payload.routineId, state.cyclesPage, controller)
            commit('replaceAllCycles', result)
            commit('setCycleLastPage', result.isLastPage)
            return result
        },
        async addCycle({dispatch}, payload) {
            let result= await cyclesApi.add(payload.routineId,payload.body)
            dispatch('get', {routineId: payload.routineId})
            return result
        },
        async modifyCycle({dispatch}, payload){
            let result= await cyclesApi.modify(payload.routineId, payload.cycleId, payload.body)
            dispatch('get', {routineId: payload.routineId})
            return result
        },

        async deleteCycle({dispatch}, payload){
            await cyclesApi.delete(payload.routineId,payload.cycleId)
            dispatch('get', {routineId: payload.routineId})
        },
        async deleteCycleExercise({state}, payload){
            await cyclesApi.deleteCycleExercise(payload.cycleId,payload.exerciseId)
            console.log(state.cycles)

        },
        async addCycleExercise({state},payload){
            await cyclesApi.addCycleExercise(payload.cycleId,payload.exerciseId,payload.body)
            console.log(state.cycles)
        }

    }
}