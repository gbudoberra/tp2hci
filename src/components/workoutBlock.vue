<template>
  <v-card color="white" raised outlined rounded="xl">
    <v-container>

      <v-row>

        <v-col cols="1">
          <color-pill :color="color"></color-pill>
        </v-col>


        <v-col>
          <v-card-title class="text-h5" v-text="title">RTitle</v-card-title>
          <v-card-subtitle class="text-h6">{{qty}} Sets</v-card-subtitle>
        </v-col>
        <v-col cols="5" align="end" align-self="center">
          <v-row>
            <exercises-carousel :exercises="exercises"></exercises-carousel>
          </v-row>
        </v-col>
        <v-col cols="1"></v-col>



      </v-row>

    </v-container>
  </v-card>
</template>

<script>
import ColorPill from "./colorPill";
import ExercisesCarousel from "./exercisesCarousel";
export default {
  name: "workoutBlock",
  components: {ExercisesCarousel, ColorPill},
  props:['title', 'qty', 'exercises', 'color']
}
</script>

<style scoped>

</style>