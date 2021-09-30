<template>
  <v-card color="white" raised outlined rounded="xl">
    <v-container>
      <v-row>
        <v-col>
          <v-card-title class="text-h5">Login</v-card-title>
        </v-col>
        <v-col align="center" align-self="center">
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
        <v-col cols="1" align-self="center">
          <v-btn @click="login">Login</v-btn>
        </v-col>
      </v-row>

    </v-container>
  </v-card>
</template>

<script>
import profile from "../store/user"
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
    login() {
      // authenticate
      profile.user = this.username;
      const redirectPath = this.$route.query.redirect || "/";
      this.$router.push(redirectPath);
    },
  },
};
</script>

<style scoped>

</style>