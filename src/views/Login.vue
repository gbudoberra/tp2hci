<template>
    <v-container fluid>
        <v-row justify="space-between">
            <v-col cols="1"></v-col>
            <v-col align-self="center" align-content="center">



                    <v-card color="white" raised outlined rounded="xl">
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-card-title class="text-h5">Login</v-card-title>
                                </v-col>
                                <v-col cols="5" align="end" align-self="center">
                                    <v-row>
                                        <v-text-field v-model="usernameLI" hide-details="true" loader-height="5"

                                                      label="Username"></v-text-field>
                                    </v-row>
                                    <v-row>
                                        <v-text-field
                                            v-model="passwordLI"
                                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="show1 ? 'text' : 'password'"
                                            label="Password"
                                            @click:append="show1 = !show1"
                                            @keyup.enter="login(usernameLI, passwordLI)"
                                        ></v-text-field>
                                    </v-row>
                                    <v-row>
                                        <v-col><v-btn @click="login(usernameLI, passwordLI)"  color="#1E3163" dark>LOGIN</v-btn></v-col>
                                      <v-col><v-btn :to="{name: 'SignIn'}">Sign In</v-btn></v-col>
                                    </v-row>

                                </v-col>
                                <v-col cols="1"></v-col>
                            </v-row>
                        </v-container>
                    </v-card>
            </v-col>

            <v-col cols="1"></v-col>
        </v-row>
    </v-container>
</template>

<script>
import {store} from "../store";
export default {
    name: "Login",
    data: () => {
        return {
            show1: false,
            show2: false,
            usernameLI: null,
            passwordLI: null,
            usernameR: null,
            passwordR: null
        }
    },
    methods: {
        async login(user, password) {
          console.log(user, password)
            await store.dispatch('security/login', {user, password})
            const redirectPath = this.$route.query.redirect || "/";
            await this.$router.push(redirectPath);
        },
    },
}
</script>

<style scoped>

</style>