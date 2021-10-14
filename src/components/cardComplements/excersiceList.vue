<template>


    <v-row align="center"
           justify="center">
      <v-col cols="1"></v-col>
      <v-layout row wrap>
        <v-flex
            xs12
            md6
            lg4
            v-for="exercise in exercises.content" v-bind:key="exercise.id"
        >
      <v-col align-self="center" >
        <exercise-v-card :name="exercise.exercise.name" :reps="exercise.repetitions" :duration="exercise.duration" :order="exercise.order"/>
      </v-col>
        </v-flex>
      </v-layout>
      <v-col cols="1"></v-col>

    </v-row>


</template>

<script>
import ExerciseVCard from "./exerciseVCard";
export default {
  name: "exerciseList",
  components: {ExerciseVCard},
  props: ['exercises']
}
</script>

<style scoped>

</style>