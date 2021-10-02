import myRoutines from './myRoutines';
<template>
  <v-container>
    <v-row fluid v-for="routine in routines" :key="routine.id">
      <v-col>
      <v-card color="white" raised outlined rounded="xl">
        <v-container>

          <v-row>

            <v-col cols="1">
              <color-pill :color="routine.color"></color-pill>
            </v-col>

            <v-col cols="3">

              <v-card-title class="text-h5" v-text="routine.title">RTitle</v-card-title>

              <v-card-subtitle v-text="routine.description">RDescription</v-card-subtitle>

              <v-card-text >
                <div>Duration: {{routine.duration}}</div>
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
              <v-btn fab color="blue-grey lighten-3"><v-icon dark>edit</v-icon></v-btn>
            </v-col>



          </v-row>

        </v-container>

      </v-card>



      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import store from "../store/routines";
import ColorPill from "../components/colorPill";
import FavBtn from "../components/favBtn";
import blocksCarousel from "../components/blocksCarousel";



export default {
  name: "MyRoutines",
  data:()=>({
    // Hay que hacer esto general
    routines: store.data().routines.filter(routine => {return routine.pName==='Esteban Quito'}),
    favRoutines: store.data().favRoutines,
  }),

  methods:{
    favs: store.methods.favs
  },

  components: {ColorPill, FavBtn,blocksCarousel}
}
</script>

<style scoped>

</style>