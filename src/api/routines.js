import { Api } from "./api";
/*
* getUrl(slug)
* getAll(difficulty, search, page, size, orderBy, direction, controller)
* getFromUser(userId, difficulty, search, page, size, orderBy, direction, controller)
* getMyRoutines(difficulty, search, page, size, orderBy, direction, controller)
* get(routineId, controller)
* add(body, controller)
* modify(body, controller)
* removeRoutine(routineId, controller)
* */
export { RoutinesApi };

class RoutinesApi {

    static getUrl(slug){
        return `${Api.baseURL}${ slug ? `/${slug}` : ''}`;
    }

    static async getAll(page, orderBy, direction, controller){
        return await Api.get(this.getUrl(`routines?page=${page}&orderBy=${orderBy}&direction=${direction}`), false, controller);
    }
    static async getAllFavorites(page, orderBy, direction, controller){
        return await Api.get(this.getUrl(`favourites?page=${page}&orderBy=${orderBy}&direction=${direction}`), true, controller);
    }



    static async getFromUser(userId, difficulty, search, page, size, orderBy, direction, controller){
        return await Api.get(this.getUrl('users/{userId}/routines'), true, controller);
    }

    static async getMyRoutines(page, orderBy, direction,controller){
        return await Api.get(this.getUrl(`users/current/routines?page=${page}&orderBy=${orderBy}&direction=${direction}`), true, controller);
    }

    static async get(routineId, controller){
        return await Api.get(this.getUrl(`routines/${routineId}`), true, controller)
    }

    static async add(body, controller){
        return await Api.post(this.getUrl('routines'), true, body, controller)
    }

    static async modify(body, controller){
        return await Api.post(this.getUrl('routines'), true, body, controller)
    }
    static async modifyRoutine(body, id, controller){
        return await Api.put(this.getUrl(`routines/${id}`), true, body, controller)
    }
    static async delete(routineId, controller){
        return await Api.delete(this.getUrl(`routines/${routineId}`), true, controller)
    }
    static async review(routineId, rating, controller){
        await Api.post(this.getUrl(`reviews/${routineId}`), true, {review:"", score:rating}, controller)
    }


}
