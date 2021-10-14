import {cyclesApi} from "../../api/cycles";


export default {
    state:{
        cycles: null
    },
    mutations:{
        replaceAllCycles(state, cycles){
            state.cycles = cycles;
        }
    },
    actions:{
        async get({commit}, payload, controller){
            const result = await cyclesApi.getAll(payload.routineId, controller)
            commit('replaceAllCycles', result)
            console.log('result cycles', result)
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
        }
    }
}