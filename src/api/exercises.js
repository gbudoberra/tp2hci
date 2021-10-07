import { Api} from "./api";

export { ExerciseApi, Exercise };

class ExerciseApi {
    static getUrl(slug){
        return `${Api.baseURL}${ slug ? `/${slug}` : ''}`;
    }
    static async getAll(search, page, size, orderBy, direction, controller){
        let init = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            search: search,
            page: page,
            size: size,
            orderBy: orderBy,
            direction: direction
        };
        return await Api.getWithInit(this.getUrl('exercises'), true, init, controller);
    }
    static async get(exerciseId, controller){
        return await Api.getWithInit(this.getUrl(`exercises/${exerciseId}`), true, controller);
    }

    static async add(body, controller){
        return await Api.post(this.getUrl('exercises'), true, body, controller);
    }

    static async modify(exerciseId, body, controller){
        return await Api.put(this.getUrl(`exercises/${exerciseId}`), true, body, controller);
    }
    static async remove(exerciseId, controller){
        return await Api.delete(this.getUrl(`exercises/${exerciseId}`), true, controller);
    }
}

class Exercise{
    constructor(id, name , detail, type, date, metadata){
        if(id){
            this.id = id;
        }
        this.name=name;
        this.detail=detail;
        this.type=type;
        this.date=date;
        this.metadata=metadata;
    }
}