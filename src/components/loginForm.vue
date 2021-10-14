<template>
    <div>
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
                    <v-btn rounded color="#1E3163" class="white--text" :disabled="!valid" @click="validate">LOG IN</v-btn>
                </v-col>
            </v-row>
            <v-row>
              <v-col align="center">
                New to TrainMe?
                <router-link :to="{name: 'SignIn'}">SIGN UP</router-link>
              </v-col>
            </v-row>

        </v-container>
    </v-form>
    <v-row>
        <v-col align="center" cols="12">
            <v-alert type="error"
                     v-model="alert"
                     dismissible
            >
                {{this.errorMsg}}
            </v-alert>
        </v-col>
    </v-row>
</div>
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
        alert:false,
        errorMsg: null,
        usernameRules: [
            v => !!v || 'Username is required',
            v => (v && v.length <= 25) || 'Name must be less than 25 characters',
        ],
        passwordRules: [
            v => !! v || 'Password is required'
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
                    if(error.code === 4){
                        if (error.details[0]===("Username does not exist")) {
                            this.$data.errorMsg = 'Username does not exist'
                            this.$data.alert=true
                        }
                        else if (error.details[0]===("Password does not match")) {
                            this.$data.errorMsg = 'Password does not match'
                            this.$data.alert=true
                        }
                    }
                    else if (error.code === 1){
                        if (error.details[0].includes("Object didn't pass validation for format email:")) {
                            this.$data.errorMsg = 'Please provide a valid email'
                            this.$data.alert=true
                        }
                    }
                    else if (error.code === 8){
                        if (error.details[0].includes("Email not verified")) {
                            this.$data.errorMsg = 'Email not verified'
                            this.$data.alert=true
                        }
                    }
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