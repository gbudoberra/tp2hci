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
export { RoutinesApi, Routine };

class RoutinesApi {

    static getUrl(slug){
        return `${Api.baseURL}${ slug ? `/${slug}` : ''}`;
    }

    static async getAll(categoryId, userId, difficulty, score, search, page, size, orderBy, direction, controller){
        let init = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            categoryId: categoryId,
            userId: userId,
            difficulty: difficulty,
            score: score,
            search: search,
            page: page,
            size: size,
            orderBy: orderBy,
            direction: direction
        };
        return await Api.getWithInit(this.getUrl('routines'), true, init, controller);
    }



    static async getFromUser(userId, difficulty, search, page, size, orderBy, direction, controller){
        let data = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            userId: userId,
            difficulty: difficulty,
            search: search,
            page: page,
            size: size,
            orderBy: orderBy,
            direction: direction
        };
        return await Api.getWithInit(this.getUrl('users/{userId}/routines'), true, data, controller);
    }

    static async getMyRoutines(difficulty, search, page, size, orderBy, direction, controller){
        let init = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            difficulty: difficulty,
            search: search,
            page: page,
            size: size,
            orderBy: orderBy,
            direction: direction
        };
        return await Api.getWithInit(this.getUrl('users/current/routines'), true, init, controller);
    }

    static async get(routineId, controller){
        return await Api.get(this.getUrl(`routines/${routineId}`, true, controller))
    }

    static async add(body, controller){
        return await Api.post(this.getUrl('routines'), true, body, controller)
    }

    static async modify(body, controller){
        return await Api.post(this.getUrl('routines'), true, body, controller)
    }

    static async delete(routineId, controller){
        return await Api.delete(this.getUrl(`routines/${routineId}`), true, controller)
    }


}

class Routine {
    constructor(id, name, detail, date, score, isPublic, difficulty, user, category,metadata) {
        if(id){
            this.id = id;
        }
        this.name=name;
        this.detail=detail;
        this.date=date;
        this.score=score;
        this.isPublic=isPublic;
        this.difficulty=difficulty;
        this.user=user;
        this.category=category;
        this.metadata=metadata;

    }
}