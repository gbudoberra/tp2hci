<template>


    <v-container>
        <v-col>


          <routine-main-card :toLink="{name: 'routineDetails', params: { id: routine.id}}" :do-hover="true">
            <template v-slot:body>
              <v-container>

                <v-row>

                  <v-col cols="1">
                    <color-pill :color="routine.color"></color-pill>
                  </v-col>

                  <v-col>

                    <v-card-title class="text-h5" v-text="routine.title">RTitle</v-card-title>

                    <v-card-subtitle v-text="routine.description">RDescription</v-card-subtitle>

                    <v-card-text >
                      <div>Duration: {{routine.duration}}</div>
                      <div>Difficulty: {{routine.difficulty}}</div>
                      <div>
                        <rating-stars :routine-rating="routine.rating"></rating-stars>
                      </div>
                    </v-card-text>

                    <v-card-actions class="justify-start">

                      <v-col cols="8">
                        <fav-btn :routine-id="routine.id"></fav-btn>
                      </v-col>

                    </v-card-actions>
                  </v-col>

                  <v-col align="end" align-self="center" cols="3">
                    <main-card-avatar :p-name="routine.pName" :pic-src="routine.pPic" :p-des="routine.pDes"></main-card-avatar>
                  </v-col>

                </v-row>

              </v-container>
            </template>
          </routine-main-card>




        </v-col>
    </v-container>

</template>

<script>
import store from "../store/routines";
import ratingStars from "./cardComplements/ratingStars";
import MainCardAvatar from "./cardComplements/mainCardAvatar";
import FavBtn from "./cardComplements/favBtn";
import ColorPill from "./cardComplements/colorPill";
import RoutineMainCard from "./mainCard";

export default {
  name: "exploreRoutine",
  data: () => ({
    routines: store.data().routines,
  }),
  props: ["routine"],
  components: {RoutineMainCard, ColorPill, FavBtn, MainCardAvatar, ratingStars}
}
</script>

<style scoped>
</style>