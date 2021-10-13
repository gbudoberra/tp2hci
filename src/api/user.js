import { Api } from "./api";

export { UserApi, Credentials};

class UserApi{
    static getUrl(slug){
        return `${Api.baseURL}/users${ slug ? `/${slug}` : ''}`;
    }
    static async login(user, password, controller){
        console.log('user '+user)
        console.log('password '+password)
        const result = await Api.post(UserApi.getUrl('login'), false, new Credentials(user, password), controller);
        console.log(result)
        Api.token = result.token
        console.log(Api.token)
    }
    static async register(username, password, firstName, lastName, gender, email, avatarUrl, controller){
        let data = {username, password, firstName, lastName, gender, email, avatarUrl}
        console.log('data user: ',data)
        const result = await  Api.post(UserApi.getUrl(), false, data, controller)
        console.log(result)
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
    static async verifyEmail(code, email, controller){
        let data = {code, email}
        console.log(data)
        const result = await Api.post(UserApi.getUrl('verify_email'), false, data, controller)
        console.log(result)
        // console.log(controller)
    }

    static async resendVerify(controller, email){
        const result = await Api.post(UserApi.getUrl('resend_verification'), false, {email}, controller)
        console.log(result)
    }
}

class Credentials{
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}