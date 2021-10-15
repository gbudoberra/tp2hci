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
                  <div>Difficulty: {{ routine.difficulty }}</div>

                </v-card-text>

              <v-card-actions class="justify-start">
                <v-row>
                  <v-col cols="3">
                    <fav-btn :routine-id="routine.id"></fav-btn>
                  </v-col>

                  <v-col cols="3">
                    <v-btn fab outlined color="grey darken-3" :to="{name: 'routineDetails', params: { id: routine.id}}">
                      <v-icon>
                        mdi-playlist-edit
                      </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-col>

              <v-col align-self="center" v-if="cycles">
                <blocks-carousel :workouts="cycles"></blocks-carousel>
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
import {store} from "@/store";

export default {
  name: "myRoutinesRoutine",
  components: {BlocksCarousel, FavBtn, ColorPill, RoutineMainCard},
  props: ["routine"],
  data() {
    return {
      cycles: null
    }
  },
  async created() {
    let aux = this.$props.routine.id
    let result = await store.dispatch('get', {routineId: aux})
    console.log(result)
    this.$data.cycles = result
  }
}

</script>

<style scoped>

</style>