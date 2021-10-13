<template>
  <v-container>
    <v-row align="center">
      <v-col cols="1"></v-col>
  <v-col >
      <v-card color="white" raised outlined rounded="xl">
        <v-container>
          <v-row>
            <v-col>
              <v-card-title class="text-h5">Create account</v-card-title>
            </v-col>
            <v-col cols="5" align="end" align-self="center">
              <v-row>
                <v-text-field v-model="usernameR" hide-details="true" loader-height="5"
                              label="Username"></v-text-field>
              </v-row>
              <v-row>
                <v-text-field
                    v-model="passwordR"
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show2 ? 'text' : 'password'"
                    label="Password"
                    @click:append="show2 = !show2"
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
                <v-col><v-btn color="#1E3163" dark>REGISTER</v-btn></v-col>
                <v-col><v-btn :to="{name: 'Login'}">LOGIN</v-btn></v-col>
              </v-row>
              <v-row>&nbsp;</v-row>
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
export default {
  name: "SignIn"
}
</script>

<style scoped>

</style>