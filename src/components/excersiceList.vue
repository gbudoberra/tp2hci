<template>


    <v-row align="center"
           justify="center">
      <v-col cols="1"></v-col>
      <v-col v-for="exercise in exercises" v-bind:key="exercise.id" align-self="center" >
        <exercise-v-card :e-name="exercise.eName" :quantity="exercise.quantity" :units="exercise.units" :id="exercise.id"/>
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