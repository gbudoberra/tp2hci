<template>


    <v-row align="center"
           justify="center">
      <v-col cols="1"></v-col>
      <v-col v-for="exercise in exercises.content" v-bind:key="exercise.exercise.id" align-self="center" >
        <exercise-v-card :name="exercise.exercise.name" :reps="exercise.repetitions" :duration="exercise.duration" :id="exercise.exercise.id"/>
      </v-col>
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