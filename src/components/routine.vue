<template>
<v-container>
  <v-col>
    <routine-main-card :do-hover="true">
      <template v-slot:body>
        <v-container>

          <v-row>

            <v-col cols="1">
              <color-pill :color="routine.metadata.color"></color-pill>
            </v-col>

            <v-col cols="3">

              <v-card-title class="text-h5" v-text="routine.name">RTitle</v-card-title>

              <v-card-subtitle v-text="routine.detail">RDescription</v-card-subtitle>

              <v-card-text>
                <div>Difficulty: {{routine.difficulty}}</div>

              </v-card-text>

              <v-card-actions class="justify-start">

                <v-col>
                  <fav-btn :routine-id="routine.id"></fav-btn>
                </v-col>


              </v-card-actions>
            </v-col>

            <v-col align-self="center">
              <blocks-carousel :workouts="routine.workoutBlocks"></blocks-carousel>
            </v-col>

            <v-col cols="1">
              <v-btn fab color="blue-grey lighten-3" :to="{name: 'routineDetails', params: { id: routine.id}}">
                <v-icon>
                  visibility
                </v-icon>
              </v-btn>
            </v-col>

          </v-row>

        </v-container>
      </template>

    </routine-main-card>



  </v-col>
</v-container>
</template>

<script>
import RoutineMainCard from "./mainCard";
import ColorPill from "./cardComplements/colorPill";
import FavBtn from "./cardComplements/favBtn";
import BlocksCarousel from "./cardComplements/blocksCarousel";
export default {
  name: "myRoutinesRoutine",
  components: {BlocksCarousel, FavBtn, ColorPill, RoutineMainCard},
  props: ["routine"]
}
</script>

<style scoped>

</style>