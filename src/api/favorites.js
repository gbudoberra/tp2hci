import { Api} from "./api";

export {FavoritesApi};

class FavoritesApi{
    static async getFavorites(controller){
        return await Api.get(`${Api.baseURL}/favourites`, true, controller)
    }
    static async fav(routineId, controller){
        await Api.put(`${Api.baseURL}/favourites`, true, controller)
    }
}