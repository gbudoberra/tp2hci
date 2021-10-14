import {Api} from "./api";

export class cyclesApi{
    static getUrl(slug){
        return `${Api.baseURL}${ slug ? `/${slug}` : ''}`;
    }
    static async getAll(routineId, page, controller){
        let desc = 'desc'
        return await Api.get(this.getUrl(`routines/${routineId}/cycles?direction=${desc}&page=${page}&size=3`),true,controller)
    }
    static async add(routineId , body, controller){
        return await Api.post(this.getUrl(`routines/${routineId}/cycles`), true, body, controller)
    }
    static async modify(routineId, cycleId, body, controller){
        return await Api.put(this.getUrl(`routines/${routineId}/cycles/${cycleId}`), true, body, controller)
    }

    static async delete(routineId, cycleId, controller){
        await Api.delete(this.getUrl(`routines/${routineId}/cycles/${cycleId}`), true, controller)
    }

    static async deleteCycleExercise( cycleId, exerciseId, controller){
        await Api.delete(this.getUrl(`cycles/${cycleId}/exercises/${exerciseId}`), true, controller)
    }

    static async addCycleExercise( cycleId, exerciseId,body, controller){
        await Api.post(this.getUrl(`cycles/${cycleId}/exercises/${exerciseId}`), true, body, controller)
    }


}