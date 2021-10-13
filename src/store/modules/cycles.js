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
        }
    }
}