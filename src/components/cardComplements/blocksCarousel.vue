<template>
  <v-carousel height="150"  hide-delimiter-background hide-delimiters>
    <v-carousel-item v-for="blocks in workouts.content" v-bind:key="blocks.id">
      <v-container>
        <v-row align="center" justify="center">
          <h3> {{blocks.name}}: {{blocks.repetitions}} sets </h3>
        </v-row>
        <exercise-list :exercises="blocks.detail"></exercise-list>
      </v-container>

    </v-carousel-item>

  </v-carousel>

</template>

<script>



import ExerciseList from "./excersiceList";
export default {
  name: "blocksCarousel",
  components: {ExerciseList},
  props: ['workouts'],
  created() {
    console.log(this.$props.workouts)
  }

}
</script>

<style scoped>

</style>