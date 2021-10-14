<!--Esto es un intento de perfil bastante feo. Si quieren borrenlo.-->
<template>

  <v-container align="center">
    <v-container v-if="mainUser.user" fluid>
      <v-row class="fill-height">
        <v-col cols="4" align="center">
          <profile-avatar :user="mainUser.user"/>
        </v-col>
        <v-col align-self="center">
          <v-row>
            <v-col>
              <v-card height="100%" align="center" >
                <profile-info-list :email="mainUser.user.email" :phone="mainUser.user.phone" />
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
                      v-on="on">
                    Edit Profile
                  </v-btn>
                </template>
                <v-card>
                  <v-form ref="form"
                          v-model="valid"
                          lazy-validation>
                    <v-row>
                      <v-col>
                        <v-text-field v-model="name" label="Name"/>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-text-field v-model="lastname" label="LastName"/>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-text-field v-model="avatarUrl" label="Avatar Url"/>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-text-field v-model="phone" type="number" label="Phone"/>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col align="center">
                        <v-btn color="green" dark @click="validate(name, lastname, phone, avatarUrl)">Confirm</v-btn>
                      </v-col>
                      <v-col align="center">
                        <v-btn class="error" @click="dialog=false">Cancel</v-btn>
                      </v-col>
                    </v-row>
                </v-form>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <full-exercise-list/>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import ProfileAvatar from "../components/profileAvatar";

import {mapState} from "vuex";
import FullExerciseList from "../components/fullExerciseList";
import ProfileInfoList from "../components/profileInfoList";
import {store} from "../store";
export default {
  name: "Profile",
  components: {ProfileInfoList, FullExerciseList, ProfileAvatar},
  computed: {
    ...mapState({
      mainUser: 'security'
    })
  },
  data() {
    return {
      name: null,
      lastname: null,
      phone: null,
      avatarUrl: null,
      dialog: false,
      valid: true,
      lastnameRules: [
        v => !!v || 'Lastname is required',
      ],
      nameRules: [
        v => !!v || 'Name is required',
      ],
    }
  },
  methods:{
    async validate(name, lastname, phone, avatarUrl) {
      if (this.$refs.form.validate()) {
        let security = store.state.security
        let result = await store.dispatch('security/updateProfile', {
          firstName: name || security.user.name,
          lastName: lastname || security.user.lastname,
          phone: phone || security.user.phone,
          avatarUrl: avatarUrl|| security.user.avatarUrl,
          birthdate: security.user.birthdate,
          gender: security.user.gender,
          metadata: null
        })
        if(result !== 200)
          console.error("error")
        this.$data.dialog = false
      } else
        console.log('Rejected')
    },
  },
  beforeMount() {
    store.dispatch('security/getCurrentUser')
    console.log('getCurrentUser')

  }
}
</script>

<style scoped>

</style>