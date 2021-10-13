import { Api} from "./api";

export { ExerciseApi };

class ExerciseApi {
    static getUrl(slug){
        return `${Api.baseURL}${ slug ? `/${slug}` : ''}`;
    }
    static async getFromCycle(cycleId, page, size, controller){
        return await Api.get(this.getUrl(`cycles/${cycleId}/exercises`),true,controller)
    }
    static async getAll(controller){
        return await Api.get(this.getUrl(`exercises`),true,controller)
    }
}