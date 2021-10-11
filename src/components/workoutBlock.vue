<template>
  <v-container>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col>

  <routine-main-card>
    <template v-slot:body>

      <v-container>

        <v-row>


          <v-col>
            <v-card-title class="text-h5" v-text="title">RTitle</v-card-title>
            <v-card-subtitle class="text-h6">{{qty}} Sets</v-card-subtitle>
          </v-col>

          <v-col cols="5" align="end" align-self="center">
            <v-row>
              <exercise-list :exercises="exercises"></exercise-list>
            </v-row>
          </v-col>

          <v-col cols="1"></v-col>



        </v-row>

      </v-container>
    </template>
  </routine-main-card>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>

</template>

<script>

import ExerciseList from "./cardComplements/excersiceList";
import RoutineMainCard from "./mainCard";
export default {
  name: "workoutBlock",
  components: {RoutineMainCard, ExerciseList},
  props:['title', 'qty', 'exercises', 'color']
}
</script>

<style scoped>

</style>