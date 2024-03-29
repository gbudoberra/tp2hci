<template>

  <v-container align="center" v-if="!loading">
    <div v-if="mainUser.user">
      <v-row>
        <v-col justify="center" align="center">
          <h1 id="navigation-profile">Profile</h1>
          <v-divider/>
        </v-col>
      </v-row>
      <v-row class="fill-height" justify="space-around">
        <v-col cols="4" align="center">
          <profile-avatar :user="mainUser.user"/>
        </v-col>
        <v-col cols="4" align-self="center">
          <v-row>
            <v-col>
              <v-card height="100%" align="center">
                <v-card-title>Information</v-card-title>
                <profile-info-list :email="mainUser.user.email" :phone="mainUser.user.phone"/>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-dialog v-model="dialog"
                        width="500"
                        overlay-color="black">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      v-bind="attrs"
                      v-on="on"
                      @click="getUser"
                      rounded
                      class="accent"
                  >
                    <v-icon>edit</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-container>
                    <v-card-title>Edit Profile</v-card-title>


                    <v-form ref="form"
                            v-model="valid"
                            lazy-validation>
                      <v-row>
                        <v-col>
                          <v-text-field v-model="name" label="Name"></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-text-field v-model="lastname" label="Last Name"/>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-text-field v-model="avatarUrl" label="Avatar Url"/>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-text-field v-model="phone" label="Phone"></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col align="center">
                          <v-btn class="accent" dark @click="validate(name, lastname, phone, avatarUrl)">Confirm</v-btn>
                        </v-col>
                        <v-col align="center">
                          <v-btn class="secondary" @click="dialog=false">Cancel</v-btn>
                        </v-col>
                      </v-row>
                      <v-alert type="error" v-if="errorCatch">
                        <v-row>
                          <v-col>
                            {{ profileError.description }}: {{ profileError.details[0] }}
                          </v-col>
                          <v-col cols="1" align="end">
                            <v-btn @click="closeError">
                              <v-icon>close</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-alert>
                    </v-form>
                  </v-container>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider class="mt-5"/>
      <v-row>
        <v-col>
          <full-exercise-list/>
        </v-col>
      </v-row>
    </div>

  </v-container>
  <loading-bar v-else :loading="loading"/>
</template>

<script>
import ProfileAvatar from "../components/profileAvatar";

import {mapState} from "vuex";
import FullExerciseList from "../components/fullExerciseList";
import ProfileInfoList from "../components/profileInfoList";
import {store} from "../store";
import LoadingBar from "../components/loadingBar";

export default {
  name: "Profile",
  components: {LoadingBar, ProfileInfoList, FullExerciseList, ProfileAvatar},
  computed: {
    ...mapState({
      mainUser: 'security',
    })
  },
  data() {
    return {
      loading: false,
      profileError: null,
      errorFunction: null,
      errorCatch: false,
      name: null,
      lastname: null,
      phone: null,
      avatarUrl: null,
      dialog: false,
      valid: true,
      lastnameRules: [
        v => !!v || 'Last Name is required',
      ],
      nameRules: [
        v => !!v || 'Name is required',
      ],

    }
  },
  methods: {
    async getUser() {
      await store.dispatch('security/getCurrentUser')
      this.name = this.mainUser.user.firstName
      this.lastname = this.mainUser.user.lastName
      this.phone = this.mainUser.user.phone
      this.avatarUrl = this.mainUser.user.avatarUrl
    },
    async validate(name, lastname, phone, avatarUrl) {
      try {
        if (this.$refs.form.validate()) {
          let security = store.state.security
          await store.dispatch('security/updateProfile', {
            firstName: name || security.user.name,
            lastName: lastname || security.user.lastname,
            phone: phone || security.user.phone || '',
            avatarUrl: avatarUrl || security.user.avatarUrl,
          })
          this.$data.dialog = false
        }
      } catch (error) {
        console.log('Profile error', error)
        this.$data.profileError = error;
        this.$data.errorFunction = 'Update profile'
        // this.$data.dialog = false
        this.$data.errorCatch = true
      }
    },
    closeError() {
      this.$data.errorCatch = false
    }
  },
  beforeMount() {
    this.loading = true
    store.dispatch('security/getCurrentUser')
    console.log('getCurrentUser')
    this.loading = false

  }
}
</script>

<style scoped>
#navigation-profile {
  font-size: xxx-large;
}
</style>