<template>
  <v-container v-if="!loading">
    <v-row>
      <v-col align-self="center" align="right">
        <h1 class="text-h4">My Exercises</h1>
      </v-col>
      <v-col align-self="center" align="left">
        <pop-up-exercise title="New Exercise" :exercise-already-exists="false">
          <template v-slot:button>
            <v-icon>add</v-icon>
          </template>
        </pop-up-exercise>
      </v-col>
    </v-row>
    <v-row>
      <v-layout>
        <v-flex>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex
                  xs12
                  md6
                  lg3
                  v-for="exercise in allExercises.exercises.content" v-bind:key="exercise.id"
              >
                <v-card height="100%" class="tertiary elevation-5 flexCard">
                  <v-row>
                    <v-col cols="6">
                      <v-card-title>{{ exercise.name }}</v-card-title>
                      <v-card-subtitle>{{ exercise.detail }}</v-card-subtitle>
                      <v-card-text>{{ exercise.type }}</v-card-text>
                    </v-col>
                    <v-col class="offset-2" cols="4" align="center">
                      <pop-up-exercise title="Edit Exercise" :id="exercise.id"
                                       :exercise-already-exists="true" :name="exercise.name"
                                       :detail="exercise.detail" :type="exercise.type">
                        <template v-slot:button>
                          <v-icon>edit</v-icon>
                        </template>
                      </pop-up-exercise>
                      <confirmation-pop-up v-on:confirmation="deleteExercise(exercise.id)"
                                           msg="Delete exercise?">
                        <template v-slot:button>
                          <v-icon>delete</v-icon>
                        </template>
                      </confirmation-pop-up>
                    </v-col>
                  </v-row>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

        </v-flex>

      </v-layout>

    </v-row>
    <page-arrows v-on:nextPage="nextPage" v-on:prevPage="prevPage" :prev-condition="allExercises.exercisePage!==0"
                 :next-condition="!allExercises.exerciseLastPage"/>
  </v-container>
  <loading-bar v-else :loading="loading"/>
</template>

<script>
import {mapState} from "vuex";
import {store} from "../store";
import PopUpExercise from "./popUp/popUpExercise";
import ConfirmationPopUp from "./popUp/confirmationPopUp";
import PageArrows from "./pageArrows";
import LoadingBar from "./loadingBar";

export default {
  name: "fullExerciseList",
  components: {LoadingBar, PageArrows, ConfirmationPopUp, PopUpExercise},
  computed: {
    ...mapState({
      allExercises: 'exercises',
    })
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    async newExercise() {
      this.$data.loading = true
      await store.dispatch('newExercise',)
      this.$data.loading = false
    },
    async nextPage() {
      this.$data.loading = true
      await store.dispatch('exerciseNextPage')
      this.$data.loading = false
    },
    async prevPage() {
      this.$data.loading = true
      await store.dispatch("exercisePrevPage")
      this.$data.loading = false
    },
    async deleteExercise(id) {
      this.$data.loading = true
      await store.dispatch('deleteExercise', {id})
      this.$data.loading = false
    }
  },
  async beforeMount() {
    this.$data.loading = true
    await store.dispatch('getAllExercises');
    await console.log('getAllExercises')
    this.$data.loading = false
  },
}
</script>

<style scoped>
.flexCard {
  display: flex;
}

</style>