import { Api } from "./api";

export { UserApi, Credentials};

class UserApi{
    static getUrl(slug){
        return `${Api.baseURL}/user${ slug ? `/${slug}` : ''}`;
    }
    static async login(credentials, controller){
        const result = await Api.post(UserApi.getUrl('login'), false, credentials, controller);
        Api.token = result.token
    }
    static async logout(controller){
        await Api.post(UserApi.getUrl('logout'), true, controller);
        Api.token = undefined;
    }
    static async get(controller){
        return await Api.get(UserApi.getUrl('current'), true, controller);
    }
    static async modify(body, controller){
        return await Api.put(UserApi.getUrl('current'), true, body, controller);
    }
    static async remove(controller){
        return await Api.put(UserApi.getUrl('current'), true, controller);
    }
}

class Credentials{
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}