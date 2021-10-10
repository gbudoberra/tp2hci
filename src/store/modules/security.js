import { UserApi } from "../../api/user";
import {store} from "../index";

export default {
    namespaced: true,
    state: {
        user: null
    },
    mutations: {
        setUser(state, user){
            state.user = user;
        },
    },
    actions: {
        async login(user, password){
            console.log('security.login')
            await UserApi.login(user, password, null);
            console.log("paso UserApi")
            store.commit('setIsLoggedIn', true)
        },
        async logout({commit}){
             await UserApi.logout();
             commit('setIsLoggedIn', false);
        },
        async getCurrentUser({state}, commit){
            if(state.user)
                return state.user;

            const result = await UserApi.get();
            commit('setUser', result)
        }
    }
}