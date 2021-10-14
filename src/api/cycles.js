import {Api} from "./api";

export class cyclesApi{
    static getUrl(slug){
        return `${Api.baseURL}${ slug ? `/${slug}` : ''}`;
    }
    static async getAll(routineId, page, size, controller){
        return await Api.get(this.getUrl(`routines/${routineId}/cycles`),true,controller)
    }
    static async add(routineId , body, controller){
        return await Api.post(this.getUrl(`routines/${routineId}/cycles`), true, body, controller)
    }
}