<template>
    <v-container fluid>
        <v-row justify="space-between">
            <v-col cols="1"></v-col>
            <v-col align-self="center" align-content="center">
                <v-card color="white" raised outlined rounded="xl">
                    <v-container>
                        <v-row>
                            <v-col align-self="center">
                                <v-card-title class="text-h4">Verify your email!</v-card-title>
                                <v-card-subtitle class="text-h5"> We sent you a code to your email, click the link or enter it as follows</v-card-subtitle>
                            </v-col>
                            <v-col cols="5" align-self="center">
                                <v-row>
                                    <v-text-field v-model="code" hide-details="true" loader-height="5" label="Code"></v-text-field>
                                </v-row>
                                <v-row>
                                    <v-text-field v-model="email" hide-details="true" loader-height="5" label="Email"></v-text-field>
                                </v-row>
                                <v-row>
                                    <v-col align="center"><v-btn @click="resend(email)" color="#ff5252" dark>RESEND CODE</v-btn></v-col>
                                    <v-col align="center"><v-btn @click="verify(code, email)"  color="#388E3C" dark>VERIFY</v-btn></v-col>
                                </v-row>

                            </v-col>
                            <v-col cols="1"></v-col>
                        </v-row>
                    </v-container>
                </v-card>
                <v-row>&nbsp;</v-row>
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
            </v-col>

            <v-col cols="1"></v-col>
        </v-row>
    </v-container>
</template>

<script>
import {store} from "../store";
export default {
    name: "verifyEmail",
    data: () => {
        return {
            code: null,
            email: null,
            alert:false,
            errorMsg: null,
        }
    },
    methods:{
        async verify(code, email){
            try {
                console.log('email', email)
                await store.dispatch('security/verify', {code, email})
                await this.$router.push(`/login`)
            }catch (error){
                console.log(error)
                if(error.code === 1){
                    if (error.details[0].includes("Object didn't pass validation for format email: ")) {
                        this.$data.errorMsg = 'Please provide a valid email'
                        this.$data.alert=true
                    }
                }
                else if(error.code === 3){
                    if (error.details[0].includes("not found")) {
                        this.$data.errorMsg = 'No account registered with that email'
                        this.$data.alert=true
                    }

                }
                else if(error.code === 8) {
                    if (error.details[0].includes("Invalid verification code")) {
                        this.$data.errorMsg = 'Invalid verification code'
                        this.$data.alert = true
                    }
                }
            }
        },
        async resend(email){
            let result = await store.dispatch('security/resendVerify', {email})
            console.log(result)
        }
    }
}
</script>

<style scoped>

</style>