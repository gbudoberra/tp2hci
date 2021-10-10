<template>


    <v-container>
        <v-col>


          <routine-main-card :toLink="{name: 'routineDetails', params: { id: routine.id}}" :do-hover="true">
            <template v-slot:body>
              <v-container>

                <v-row>

                  <v-col cols="1">
                    <color-pill :color="routine.metadata.color"></color-pill>
                  </v-col>

                  <v-col>

                    <v-card-title class="text-h5" v-text="routine.name">RTitle</v-card-title>

                    <v-card-subtitle v-text="routine.detail">RDescription</v-card-subtitle>

                    <v-card-text >
                      <div>Difficulty: {{routine.difficulty}}</div>
                      <div>
                        <rating-stars :routine-rating="routine.score"></rating-stars>
                      </div>
                    </v-card-text>

                    <v-card-actions class="justify-start">

                      <v-col cols="8">
                        <fav-btn v-if="isLoggedIn" :routine-id="routine.id"></fav-btn>
                      </v-col>

                    </v-card-actions>
                  </v-col>

                  <v-col align="end" align-self="center" cols="3">
                    <main-card-avatar :p-name="routine.user.username" :pic-src="routine.user.avatarUrl"></main-card-avatar>
                  </v-col>

                </v-row>

              </v-container>
            </template>
          </routine-main-card>




        </v-col>
    </v-container>

</template>

<script>
import ratingStars from "./cardComplements/ratingStars";
import MainCardAvatar from "./cardComplements/mainCardAvatar";
import FavBtn from "./cardComplements/favBtn";
import ColorPill from "./cardComplements/colorPill";
import RoutineMainCard from "./mainCard";
import {mapState} from "vuex";

export default {
  name: "exploreRoutine",
  props: ["routine"],
  components: {RoutineMainCard, MainCardAvatar, ratingStars, ColorPill, FavBtn},
  computed: {
    ...mapState({
      isLoggedIn: 'isLoggedIn'
    })
  }
}
</script>

<style scoped>
</style>