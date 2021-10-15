<template>
  <v-container v-if="exercises">
    <v-row>
      <v-col align="center">
        <add-exercise-btn :cycleId="cycleId" v-on:updateExercises="updateExercises" v-if="isMyRoutine"/>
      </v-col>

    </v-row>
    <v-row>
      <page-arrows :prev-condition="page!==0" :next-condition="!isLastPage" v-on:nextPage="nextPage"
                   v-on:prevPage="prevPage"/>
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
          <v-col align-self="center">
            <exercise-v-card v-on:delete="updateExercises" :cycleId="cycleId" :routineId="routineId"
                             :name="exercise.exercise.name" :reps="exercise.repetitions"
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
import PageArrows from "../pageArrows";

export default {
  name: "exerciseList",
  components: {PageArrows, ExerciseVCard, AddExerciseBtn},
  props: ['cycleId', 'routineId', 'isMyRoutine'],
  data() {
    return {
      page: 0,
      isLastPage: false,
      exercises: null
    }
  },
  methods: {
    async updateExercises() {
      this.$data.exercises = await store.dispatch('getFromCycle', {cycleId: this.$props.cycleId, page: this.$data.page})
      console.log(this.$data.exercises)
      this.$data.isLastPage = this.$data.exercises.isLastPage
      console.log('data', this.$data.isLastPage)
    },
    async created() {
      await this.updateExercises()
    },
    async nextPage() {
      this.$data.page++
      await this.updateExercises()
    },
    async prevPage() {
      this.$data.page--
      await this.updateExercises()
    },
  },
  created() {
    this.updateExercises()
  }
}
</script>

<style scoped>

</style>