import { UserApi } from "../../api/user";
import {store} from "../index";

export default {
    namespaced: true,
    state: {
        user: null,
        username: null,
        isLoggedIn: false,
        email: null
    },
    mutations: {
        setUser(state, user){
            state.user = user;
            console.log('user', state.user)
        },
        setEmail(state, email){
            state.email = email
        },
        setIsLoggedIn(state, loggedIn){
            state.isLoggedIn = loggedIn;
        },
        setUsername(state, username){
            state.username = username
        }
    },
    actions: {
        async login({commit}, payload){
            if(payload.user === undefined || payload.password === null)
            console.log('security.login')
            await UserApi.login(payload.user, payload.password, null);
            console.log("paso UserApi")
            commit('setIsLoggedIn', true)
            commit('setUsername', payload.user)
        },
        async logout({commit}){
             await UserApi.logout();
             commit('setIsLoggedIn', false);
        },

        async register({commit}, payload){
            await UserApi.register(payload.username, payload.password, payload.firstName,
            payload.lastName, payload.gender, payload.email, payload.avatarUrl);
            commit('setEmail', payload.email)
            console.log(this.state.email)
            commit('setUsername', payload.user)
        },
        async verify({commit}, payload){
            // let mailV = this.state.email
            // console.log('this.state.email: ', payload.email)
           await UserApi.verifyEmail(payload.code, payload.email)
            commit("setIsLoggedIn", false)
        },
        async getCurrentUser(){
            // if(state.user)
            //     return state.user;

            const result = await UserApi.get();
            await store.commit('security/setUser', result)
        },
        async resendVerify(){
            await UserApi.resendVerify(this.state.email);
        }
    }
}