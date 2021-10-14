<!--Esto es un intento de perfil bastante feo. Si quieren borrenlo.-->
<template>

  <v-container align="center">
    <v-container v-if="mainUser.user">
      <v-row class="fill-height">
        <v-col cols="4" align="center">
          <profile-avatar :user="mainUser.user"/>
        </v-col>
        <v-col align-self="center">
          <v-card height="100%" align="center" >

              <v-list>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">
                      mdi-phone
                    </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{mainUser.user.phone}}</v-list-item-title>
                  </v-list-item-content>

                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">
                      mdi-email
                    </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{mainUser.user.email}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>


              </v-list>

          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <full-exercise-list>

        </full-exercise-list>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import ProfileAvatar from "../components/profileAvatar";
// import ExerciseList from "../components/cardComplements/excersiceList";
import store from "../store/modules/security";
import {mapState} from "vuex";
import FullExerciseList from "../components/fullExerciseList";
export default {
  name: "Profile",
  components: {FullExerciseList, ProfileAvatar},
  computed: {
    ...mapState({
      mainUser: 'security'
    })
  },
  beforeMount() {
    store.actions.getCurrentUser()
    console.log('getCurrentUser')
  }
}
</script>

<style scoped>

</style>