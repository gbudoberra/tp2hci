import { Api} from "./api";

export {FavoritesApi};

class FavoritesApi{
    static async getFavorites(page, items, controller){
        return await Api.get(`${Api.baseURL}/favourites?page=${page}&size=${items}`, true, controller)
    }
    static async fav(routineId, controller){
        await Api.post(`${Api.baseURL}/favourites/${routineId}`, true, controller)
    }
    static async unFav(routineId, controller){
        await Api.delete(`${Api.baseURL}/favourites/${routineId}`, true, controller)
    }
}