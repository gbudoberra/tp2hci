<template>
  <v-carousel height="150" hide-delimiter-background hide-delimiters>
    <v-carousel-item v-for="block in workouts.content" v-bind:key="block.id">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="3" align-self="left"/>
          <v-col cols="6" align-self="center">
            <v-card height="100%" width="100%" rounded elevation="5" color="grey lighten-2">
              <v-row>
                <v-col cols="12">
                  <v-card-title>{{ block.name }}</v-card-title>
                  <v-card-subtitle>Sets: {{ block.repetitions }}</v-card-subtitle>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="3" align-self="right"/>
          <!--          <h3> {{block.name}}: {{block.repetitions}} sets </h3>-->
        </v-row>
        <!--        <exercise-list :exercises="block.detail"></exercise-list>-->
      </v-container>

    </v-carousel-item>

  </v-carousel>

</template>

<script>


// import ExerciseList from "./excersiceList";
export default {
  name: "blocksCarousel",
  components: {},
  props: ['workouts'],
  created() {
    console.log('workouts', this.$props.workouts)
  }

}
</script>

<style scoped>

</style>