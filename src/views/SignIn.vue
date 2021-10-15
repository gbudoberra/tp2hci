<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="4">
          <v-card color="white" raised outlined rounded="xl">
            <v-container>
              <v-row>
                <v-col align-self="center">
                  <v-card-title class="text-h4">Sign Up</v-card-title>
                  <sign-in-form></sign-in-form>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SignInForm from "../components/Forms/signInForm";
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