<template>
    <v-container fluid>
        <v-row justify="space-between">
            <v-col></v-col>
            <v-col align-self="center" align-content="center">
                <v-row>&nbsp;</v-row>

                <v-row>
                    <v-card color="white" raised outlined rounded="xl">
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-card-title class="text-h5">Login</v-card-title>
                                </v-col>
                                <v-col cols="5" align="end" align-self="center">
                                    <v-row>
                                        <v-text-field hide-details="true" loader-height="5"
                                                      label="Username"></v-text-field>
                                    </v-row>
                                    <v-row>
                                        <v-text-field
                                            v-model="password"
                                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="show ? 'text' : 'password'"
                                            label="Password"
                                            @click:append="show = !show"
                                        ></v-text-field>
                                    </v-row>
                                    <v-row>
                                        <v-btn>LOGIN</v-btn>
                                    </v-row>
                                    <v-row>&nbsp;</v-row>
                                </v-col>
                                <v-col cols="1"></v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-row>
                <v-row>&nbsp;</v-row>
                <v-row>
                    <v-card color="white" raised outlined rounded="xl">
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-card-title class="text-h5">Create account</v-card-title>
                                </v-col>
                                <v-col cols="5" align="end" align-self="center">
                                    <v-row>
                                        <v-text-field hide-details="true" loader-height="5"
                                                      label="Username"></v-text-field>
                                    </v-row>
                                    <v-row>
                                        <v-text-field
                                            v-model="password"
                                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="show ? 'text' : 'password'"
                                            label="Password"
                                            @click:append="show = !show"
                                        ></v-text-field>
                                    </v-row>
                                    <v-row>
                                        <v-text-field hide-details="true" loader-height="5" label="Name"></v-text-field>
                                    </v-row>
                                    <v-row>
                                        <v-text-field hide-details="true" loader-height="5"
                                                      label="Last Name"></v-text-field>
                                    </v-row>

                                    <v-row>&nbsp;</v-row>
                                    <v-row>
                                        <v-btn>REGISTER</v-btn>
                                    </v-row>
                                    <v-row>&nbsp;</v-row>
                                </v-col>
                                <v-col cols="1"></v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-row>
            </v-col>
            <v-col></v-col>
        </v-row>
    </v-container>
</template>

<script>
import profile from "../store/user";
export default {
    name: "Login",
    data() {
        return {
            show: false,
            username: null,
            password: null
        }
    },
    methods: {
        login() {
            profile.user = this.username;
            const redirectPath = this.$route.query.redirect || "/";
            this.$router.push(redirectPath);
        },
    },
}
</script>

<style scoped>

</style>