import { UserApi } from "../../api/user";

export default {
    namespaced: true,
    state: {
        isLoggedn: false,
        user: null
    },
    mutations: {
        setUser(state, user){
            state.user = user;
        },
        setIsLoggedIn(state, loggedIn){
            state.isLoggedIn = loggedIn;
        }
    },
    actions: {
        async login({commit}, credentials){
            await UserApi.login(credentials);
            commit('setIsLoggedIn', true);
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