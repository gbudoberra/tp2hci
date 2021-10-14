<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="4">
                <v-card color="white" raised outlined rounded="xl">
                    <v-container>
                        <v-row>
                            <v-col align-self="center">
                                <v-card-title class="text-h4">Login</v-card-title>
                                <login-form></login-form>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import loginForm from "../components/loginForm";
// import {store} from "../store";
export default {
    name: "Login",
    components: {loginForm},
    data: () => {
        return {
            show1: false,
            usernameLI: null,
            passwordLI: null,
        }
    },
    // methods: {
    //     async login(user, password) {
    //         try {
    //             // console.log(user, password)
    //             await store.dispatch('security/login', {user, password})
    //             const redirectPath = this.$route.query.redirect || "/";
    //             await this.$router.push(redirectPath);
    //         }catch (error){
    //             if (error.code){
    //                 console.log('sadfsadf')
    //             }
    //         }
    //     },
    // },
}
</script>

<style scoped>

</style>