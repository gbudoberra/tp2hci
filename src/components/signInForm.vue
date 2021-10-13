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
              v-model="userRegister"
              :counter="25"
              :rules="usernameRules"
              label="Username *"
              required
          ></v-text-field>
        </v-col>
      </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    class="textField"
                    v-model="password"
                    label="Password *"
                    :rules="passwordRules"
                    required
                ></v-text-field>
            </v-col>
        </v-row>
      <v-row>
        <v-col>
          <v-text-field
              class="textField"
              v-model="name"
              :rules="nameRules"
              label="Name *"
              required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
              class="textField"
              v-model="lastname"
              :rules="lastnameRules"
              label="Lastname *"
              required
          ></v-text-field>
        </v-col>
      </v-row>


      <v-row>
        <v-col>
          <v-text-field
              class="textField"
              v-model="email"
              :rules="[v => !!v || 'Email is required']"
              label="Email *"
              required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-select
              class="textField"
              v-model="gender"
              :items="genders"
              :rules="[v => !!v || 'Color is required']"
              label="Gender"
              required
          ></v-select>

        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card-text class="compulsory">* Compulsory fields</v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <v-btn color="#1E3163" dark :disabled="!valid" @click="validate">REGISTER</v-btn>
        </v-col>
        <v-col align="center">
          <v-btn :to="{name: 'Login'}">LOGIN</v-btn>
        </v-col>
      </v-row>

    </v-container>
  </v-form>
</template>

<script>
import {store} from "../store";

export default {
  data: () => ({
      userRegister: null,
      password: null,
      name: null,
      lastname: null,
      email: null,
      valid: true,
      usernameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length <= 25) || 'Name must be less than 25 characters',
      ],
      lastnameRules: [
        v => !!v || 'Lastname is required',
      ],
      nameRules: [
        v => !!v || 'Lastname is required',
      ],
      genders: [ 'Female', 'male', 'Other' ],
      gender: 'Other',
      passwordRules: [
          v => !! v || 'password is Required'
      ]
    })
  ,
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        let result = await store.dispatch('security/register', {
            username: this.userRegister,
            password: this.password,
            firstName: this.name,
            lastName: this.lastname,
            gender: this.gender,
            email: this.email,
            avatarUrl: "https://i.stack.imgur.com/34AD2.jpg"
        })
          if(result !== 200)
              console.error("error")
        await this.$router.push(`/verifyEmail`)
      } else
        console.log('Rejected')
    },
    // reset () {
    //   this.$refs.form.reset()
    // },
  },
}
</script>
<style scoped>
.textField{
  padding: 0 5px 0;
}
.compulsory{
  padding: 0 0 0;
  font-size: smaller;
}
</style>