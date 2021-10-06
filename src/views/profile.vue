<!--Esto es un intento de perfil bastante feo. Si quieren borrenlo.-->
<template>

  <v-container align="center">
    <v-row class="fill-height">
      <v-col cols="4" align="center">
        <profile-avatar :user="user"/>
      </v-col>
      <v-col align-self="center">
        <v-card height="100%" align="center" >
          <v-container>
            {{user.description}}
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-for="routine in routines" :key="routine.id">
      <exercise-list v-for="blocks in routine.workoutBlocks" v-bind:key="blocks.id" :exercises="blocks.exercises"></exercise-list>
    </v-row>
  </v-container>
</template>

<script>
import user from "../store/user"
import ProfileAvatar from "../components/profileAvatar";
import ExerciseList from "../components/cardComplements/excersiceList";
import store from "../store/routines"
export default {
  name: "Profile",
  components: {ExerciseList, ProfileAvatar},
  data: () => ({
    user: user.user,
    routines: store.data().routines.filter(routine => {return routine.pID===user.user.id}),
  })
}
</script>

<style scoped>

</style>