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
            <v-card-title class="text-h5" v-text="title">Title</v-card-title>
            <v-card-subtitle class="text-h6" v-text="detail">Detail</v-card-subtitle>
            <v-card-subtitle class="text-h7" v-text="type">Type</v-card-subtitle>
            <v-card-subtitle class="text-h7">Repetitions: {{repetitions}}</v-card-subtitle>
          </v-col>

<!--          <v-col cols="5" align="end" align-self="center">-->
            <v-container v-if="exercises">
              <exercise-list :exercises="exercises"></exercise-list>
            </v-container>
<!--          </v-col>-->

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


import RoutineMainCard from "./mainCard";
import ExerciseList from "./cardComplements/excersiceList"
import {store} from "../store";
// import {store} from "../store";
// import storeE from '../store/modules/exercises'
export default {
  name: "workoutBlock",
  components: {RoutineMainCard, ExerciseList},
  props:['title', 'detail', 'id', 'repetitions', 'type'],
  data() {
    return {
      // loading: false,
      exercises: null
    }
  }
  ,
  async created() {
    let id = this.$props.id;
    this.$data.exercises = await store.dispatch('getFromCycle', {cycleId: id, page: 0})
  }
}
</script>

<style scoped>

</style>