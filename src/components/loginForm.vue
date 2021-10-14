<template>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
        <v-container>

            <v-row>
                <v-col>
                    <v-text-field
                        class="textField"
                        v-model="userLI"
                        label="Username"
                        :rules="usernameRules"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field
                        v-model="password"
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show ? 'text' : 'password'"
                        label="Password"
                        :rules="passwordRules"
                        @click:append="show = !show"
                        @keyup.enter="validate(userLI, password)"
                        required
                    ></v-text-field>
                </v-col>

            </v-row>
            <v-row>
                <v-col align="center">
                    <v-btn color="#1E3163" dark :disabled="!valid" @click="validate">LOGIN</v-btn>
                </v-col>
                <v-col align="center">
                    <v-btn :to="{name: 'SignIn'}">REGISTER</v-btn>
                </v-col>
            </v-row>

        </v-container>
    </v-form>

</template>

<script>
import {store} from "../store";

export default {
    name: "loginForm",
    data: () => ({
        userLI: null,
        password: null,
        show: false,
        valid: true,
        usernameRules: [
            v => !!v || 'Username is required',
            v => (v && v.length <= 25) || 'Name must be less than 25 characters',
        ],
        passwordRules: [
            v => !! v || 'password is Required'
        ]
    }),
    methods: {
        async validate(){
            if(this.$refs.form.validate()){
                try {
                    console.log(this.userLI)
                    console.log(this.password)
                    await store.dispatch('security/login', {
                        user: this.userLI,
                        password: this.password
                    })
                    const redirectPath = this.$route.query.redirect || "/";
                    await this.$router.push(redirectPath);
                }catch (error){
                    console.log(error)
                }
            }else
                console.log('Rejected')
        }
    }
}
</script>

<style scoped>
.textField{
    padding: 0 5px 0;
}
</style>