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
                                    <v-col align="center"><v-btn @click="resend" color="#ff5252" dark>RESEND CODE</v-btn></v-col>
                                    <v-col align="center"><v-btn @click="verify(code, email)"  color="#388E3C" dark>VERIFY</v-btn></v-col>
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
    name: "verifyEmail",
    data: () => {
        return {
            code: null,
            email: null
        }
    },
    methods:{
        async verify(code, email){
            console.log('email', email)
            let result = await store.dispatch('security/verify', {code, email})
            if(result != 200)
                console.error("error")
            else {
                console.log(result)
                await this.$router.push(`/`)
            }
        },
        async resend(){
            console.log('holas')

            let result = await store.dispatch('security/resendVerify')
            if(result != 200)
                console.error("error")
            console.log(result)
        }
    }
}
</script>

<style scoped>

</style>