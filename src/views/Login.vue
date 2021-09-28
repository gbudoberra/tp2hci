<template>
  <v-card color="white" raised outlined rounded="xl">
    <v-container>
      <v-row>
        <v-col>
          <v-card-title class="text-h5">Login</v-card-title>
        </v-col>
        <v-col cols="5" align="end" align-self="center">
          <v-row>
            <v-text-field  hide-details="true" loader-height="5" label="Username"></v-text-field>
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
          </v-row>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      show :false,
      username: null,
      password: null
    }
  },
  methods:{
    login(){
      //verificar
    }
  }
}
</script>

<style scoped>

</style>