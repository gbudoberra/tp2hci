<template>
    <v-container>
        <v-card>
            <h1>LOADING...</h1>
        </v-card>
    </v-container>
</template>

<script>
import {store} from "../store";

export default {
    name: "verifyAuto",
    methods: {
        verify() {
            console.log('email=', this.$route.query.user)
            console.log('code=', this.$route.query.code)
            console.log('test')
            // let result = await store.dispatch('security/verify', {code, email})
            // console.log(result)
            // await this.$router.push(`/login`)

        },
    },
    async created(){
        let email = this.$route.query.user
        let code = this.$route.query.code
        let result = await store.dispatch('security/verify', {code, email})
        console.log(result)
        await this.$router.push(`/login`)
    },
    // props:{
    //     user:{
    //         type: String,
    //         default: null
    //     },
    //     code:{
    //         type: String,
    //         default: null
    //     }
    // }
}
</script>

<style scoped>

</style>