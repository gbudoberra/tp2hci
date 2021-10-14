<template>
  <v-container >
<v-row>
  <v-col align="center">
    <add-exercise-btn :cycleId="cycleId" v-on:updateExercises="updateExercises"/>
  </v-col>

</v-row>

    <v-row align="center"
           justify="center">
      <v-col cols="1"></v-col>
      <v-layout wrap>
        <v-flex
            xs12
            md6
            lg4
            v-for="exercise in exercises.content" v-bind:key="exercise.id"
        >
      <v-col align-self="center" >
        <exercise-v-card v-on:delete="updateExercises" :cycleId="cycleId" :routineId="routineId" :name="exercise.exercise.name" :reps="exercise.repetitions"
                         :duration="exercise.duration" :order="exercise.order" :id="exercise.exercise.id"/>
      </v-col>
        </v-flex>
      </v-layout>
      <v-col cols="1"></v-col>

    </v-row>
  </v-container>


</template>

<script>
import ExerciseVCard from "./exerciseVCard";
import {store} from "@/store";
import AddExerciseBtn from "@/components/AddExerciseBtn";
export default {
  name: "exerciseList",
  components: {ExerciseVCard, AddExerciseBtn},
  props: ['exercises', 'cycleId', 'routineId'],
  methods:{
    async updateExercises(){
      this.$props.exercises=await store.dispatch('getFromCycle', {cycleId: this.$props.cycleId, page: 0})
    }
  }
}
</script>

<style scoped>

</style>