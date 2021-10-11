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
            <v-container>
              {{mainUser.user.email}}
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <!--    <v-row v-for="routine in routines" :key="routine.id">-->
      <!--      <exercise-list v-for="blocks in routine.workoutBlocks" v-bind:key="blocks.id" :exercises="blocks.exercises"></exercise-list>-->
      <!--    </v-row>-->
    </v-container>
  </v-container>
</template>

<script>
import ProfileAvatar from "../components/profileAvatar";
// import ExerciseList from "../components/cardComplements/excersiceList";
import store from "../store/modules/security";
import {mapState} from "vuex";
export default {
  name: "Profile",
  components: { ProfileAvatar},
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