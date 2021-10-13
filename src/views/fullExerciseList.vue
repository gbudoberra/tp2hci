<template>
<v-container v-if="allExercises">
  <v-row>
    <v-col align="center">
      <h1 class="text-h4">MyExercises</h1>
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
                <v-container>

                  <v-card-title class="ceroPadding">{{exercise.name}}</v-card-title>
                  <v-card-subtitle class="ceroPadding">{{exercise.detail}}</v-card-subtitle>

                </v-container>
              </v-col>

                  <v-col>
                  <v-col cols="6">
                    <v-btn><v-icon>delete</v-icon></v-btn>
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
  </v-row>
</v-container>
</template>

<script>
import {mapState} from "vuex";
import {store} from "../store";

export default {
  name: "fullExerciseList",
  components: {},
  computed:{
    ...mapState({
      allExercises: 'exercises'
    })
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
.ceroPadding{
  padding: 10px 0 0;
}
</style>