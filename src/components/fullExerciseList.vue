<template>
<v-container v-if="allExercises">
  <v-row>
    <v-col align="center">
      <v-col>

        <v-row>
          <h1 class="text-h4">MyExercises</h1>
        </v-row>
        <v-row>

          <div v-show="this.exercisePage!==0">
            <v-btn class="ma-2" color="blue lighten-3" dark @click="prevPage">
              <v-icon dark left>
                mdi-arrow-left
              </v-icon>
              Previous
            </v-btn>
          </div>
          <v-btn class="ma-2" color="blue lighten-3" dark @click="nextPage" v-show="!this.lastPage">
            Next
            <v-icon dark left>
              mdi-arrow-right
            </v-icon>
          </v-btn>

        </v-row>
      </v-col>
    </v-col>
  </v-row>
  <v-row >
    <v-layout>
      <v-flex>
        <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex
              xs12
              md6
              lg4
              v-for="exercise in allExercises.exercises.content" v-bind:key="exercise.id"
          >

            <v-card height="100%" class="elevation-5 flexCard" >
              <v-col cols="8">


                  <v-card-title class="Padding">{{exercise.name}}</v-card-title>
                  <v-card-subtitle class="Padding">{{exercise.detail}}</v-card-subtitle>


              </v-col>

                  <v-col>
                  <v-col cols="6">
<!--                    <v-btn @click="deleteExercise(exercise.id)"><v-icon>delete</v-icon></v-btn>-->
                  </v-col>
                  <v-col>
                    <v-btn><v-icon>edit</v-icon></v-btn>
                  </v-col>

                  </v-col>


            </v-card>

              </v-flex>
            </v-layout>
          </v-container>

      </v-flex>

    </v-layout>
    <pop-up-routine title="Add Exercise">
      <template v-slot:formSlot>
        <add-exercise-form/>
      </template>
    </pop-up-routine>
  </v-row>

</v-container>
</template>

<script>
import {mapState} from "vuex";
import {store} from "../store";
import popUpRoutine from "./popUpRoutine";
import AddExerciseForm from "../components/addExerciseForm";

export default {
  name: "fullExerciseList",
  components: {AddExerciseForm, popUpRoutine},
  computed:{
    ...mapState({
      allExercises: 'exercises',
      exercisePage: 'exercisePage',
      lastPage: 'exerciseLastPage'
    })
  },
  methods:{
    newExercise(){
        store.dispatch('newExercise', )
    },
    nextPage(){
      store.dispatch('exerciseNextPage')
    },
    prevPage(){
      store.dispatch("exercisePrevPage")
    }
  },
  beforeMount() {
      store.dispatch('getAllExercises');
      console.log('getAllExercises')
  },
}
</script>

<style scoped>
.flexCard {
  display: flex;
  flex-direction: row;
}
.Padding{
  padding: 10px 0 0;
}
</style>