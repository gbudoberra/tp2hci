import { Api} from "./api";

export { ExerciseApi };

class ExerciseApi {
    static getUrl(slug){
        return `${Api.baseURL}${ slug ? `/${slug}` : ''}`;
    }
    static async getFromCycle(cycleId, page, controller){
        return await Api.get(this.getUrl(`cycles/${cycleId}/exercises?page=${page}`),true,controller)
    }
    static async getAll(page, controller){
        return await Api.get(this.getUrl(`exercises?page=${page}&size=9`),true,controller)
    }
    static async add(name, detail, type){
        return await Api.post(this.getUrl(`exercises`), true, {name: name, detail:detail, type:type}, null)
    }
    static async delete(id, controller){
        await Api.delete(this.getUrl(`exercises/${id}`), true, controller)
    }
    static async modify(id, name, detail, type){
        await Api.put(this.getUrl(`exercises/${id}`),true, {name:name, detail:detail, type:type})
    }
}