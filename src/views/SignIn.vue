<template>
  <v-container>
    <v-row align="center">
      <v-col cols="1"></v-col>
          <v-col >
              <v-card color="white" raised outlined rounded="xl">
                <v-container>
                  <v-row>
                    <v-col cols="5" align-self="center">
                      <v-card-title class="text-h4">Create Account</v-card-title>
                    </v-col>
                    <v-col>
                      <sign-in-form></sign-in-form>
                    </v-col>
                    <v-col cols="1"/>
                  </v-row>
                </v-container>

              </v-card>
          </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import SignInForm from "../components/signInForm";
export default {
  name: "SignIn",
  components: {SignInForm},
  data: () => {
    return {
      show1: false,
      show2: false,
      usernameR: null,
      passwordR: null
    }
  },
}
</script>

<style scoped>

</style>