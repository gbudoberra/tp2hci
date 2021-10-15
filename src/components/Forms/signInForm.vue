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
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                @click:append="show = !show"
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
                label="Last Name *"
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
            <v-btn rounded color="#1E3163" class="white--text" :disabled="!valid" @click="validate">SIGN UP</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center">
            Already registered?
            <router-link :to="{name: 'Login'}">LOG IN</router-link>
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
          {{ this.errorMsg }}
        </v-alert>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {store} from "../../store";
// import ErrorPopUp from "./errorPopUp";

export default {
  // components: {ErrorPopUp},
  data: () => ({
    userRegister: null,
    password: null,
    name: null,
    lastname: null,
    email: null,
    valid: true,
    show: false,
    alert: false,
    errorMsg: null,
    usernameRules: [
      v => !!v || 'Username is required',
      v => (v && v.length <= 25) || 'Name must be less than 25 characters',
    ],
    lastnameRules: [
      v => !!v || 'Last Name is required',
    ],
    nameRules: [
      v => !!v || 'Name is required',
    ],
    genders: ['Female', 'Male', 'Other'],
    gender: 'other',
    passwordRules: [
      v => !!v || 'Password is required'
    ]
  })
  ,
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        try {
          await store.dispatch('security/register', {
            username: this.userRegister,
            password: this.password,
            firstName: this.name,
            lastName: this.lastname,
            gender: this.gender,
            email: this.email,
            avatarUrl: "https://i.stack.imgur.com/34AD2.jpg"
          })
          await this.$router.push(`/verifyEmail`)
        } catch (error) {
          if (error.code === 2) {
            if (error.details[0] === ("UNIQUE constraint failed: User.email")) {
              this.$data.errorMsg = 'Mail already registered. Try Login?'
              this.$data.alert = true
            } else if (error.details[0] === ("UNIQUE constraint failed: User.username")) {
              this.$data.errorMsg = 'Username already registered. Try Login?'
              this.$data.alert = true
            }
          } else if (error.code === 1) {
            console.log('ERROR !')
            if (error.details[0].includes("Object didn't pass validation for format email:")) {
              this.$data.errorMsg = 'Please provide a valid email'
              this.$data.alert = true
            }
          }
          console.log(error)
        }
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
.textField {
  padding: 0 5px 0;
}

.compulsory {
  padding: 0 0 0;
  font-size: smaller;
}
</style>