import { UserApi } from "../../api/user";
import {store} from "../index";

export default {
    namespaced: true,
    state: {
        user: null,
        isLoggedIn: false,
    },
    mutations: {
        setUser(state, user){
            state.user = user;
            console.log('user', state.user)
        },
        setIsLoggedIn(state, loggedIn){
            state.isLoggedIn = loggedIn;
        },
    },
    actions: {
        async login({commit}, payload){
            console.log('security.login')
            await UserApi.login(payload.user, payload.password, null);
            console.log("paso UserApi")
            commit('setIsLoggedIn', true)
        },
        async logout({commit}){
             await UserApi.logout();
             commit('setIsLoggedIn', false);
        },
        async getCurrentUser(){
            // if(state.user)
            //     return state.user;

            const result = await UserApi.get();
            await store.commit('security/setUser', result)

        }
    }
}