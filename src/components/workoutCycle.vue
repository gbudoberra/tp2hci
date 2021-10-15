<template>
  <v-container>
    <v-row>
      <v-col class="offset-1" cols="10">
        <routine-main-card class="forth">
          <template v-slot:body>

            <v-container>

              <v-row no-gutters>


                <v-col align-self="center" align="left" cols="1">
                  <v-btn fab outlined disabled>{{ order }}</v-btn>
                </v-col>
                <v-col align-self="center" align="center">
                  <v-card-title class="text-h5">{{ title }}</v-card-title>
                </v-col>
                <v-col align-self="center" align="center">
                  <v-text class="text-h7" v-text="type">Type</v-text>
                </v-col>
                <v-col align-self="center" align="center">
                  <v-text class="text-h7">{{ repetitions }} repetitions</v-text>
                </v-col>
                <v-col align="right" v-if="isMyRoutine">
                  <pop-up-edit-cycle title="Edit Cycle" :routine-id="routineId" :cycle-id="id"
                                     :old-title="title" :old-detail="detail" :old-repetitions="repetitions"
                                     :old-type="type" :old-order="order"
                  >
                    <template v-slot:button>
                      <v-icon>edit</v-icon>
                    </template>
                  </pop-up-edit-cycle>

                </v-col>
                <v-col align="center" v-if="isMyRoutine">


                  <v-btn
                      outlined
                      x-large
                      rounded
                      @click="dialog=true"
                  >
                    <v-icon>delete</v-icon>
                    <v-dialog
                        v-model="dialog"
                        max-width="350"
                    >
                      <v-card>
                        <v-card-title class="text-h5">
                          Remove cycle from this routine?
                        </v-card-title>
                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn
                              color="green darken-1"
                              text
                              @click="deleteCycle"
                          >
                            YES
                          </v-btn>

                          <v-btn
                              color="red darken-1"
                              text
                              @click="dialog = false"
                          >
                            NO
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-btn>
                </v-col>

              </v-row>
              <v-row>
                <v-col>
                  <v-text class="text-h6" v-text="detail">Detail</v-text>
                </v-col>
              </v-row>

              <v-divider light/>
              <v-row>

                <v-container v-if="cycleExercises">
                  <exercise-list :cycleId="id" :routineId="routineId" :isMyRoutine="isMyRoutine"></exercise-list>
                </v-container>

                <v-col cols="1"></v-col>

              </v-row>

            </v-container>
          </template>
        </routine-main-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>


import RoutineMainCard from "./mainCard";
import ExerciseList from "./cardComplements/excersiceList"
import {store} from "../store";
import PopUpEditCycle from "./popUp/popUpEditCycle";


// import {store} from "../store";
// import storeE from '../store/modules/exercises'
export default {
  name: "workoutBlock",
  components: {PopUpEditCycle, RoutineMainCard, ExerciseList},
  props: ['title', 'detail', 'id', 'repetitions', 'type', 'isMyRoutine', 'routineId', 'order'],
  data() {
    return {
      // loading: false,
      cycleExercises: null,
      dialog: false
    }
  }
  ,
  methods: {
    deleteCycle() {
      store.dispatch('deleteCycle', {
        routineId: this.$props.routineId,
        cycleId: this.$props.id
      })
      this.dialog = false
    },
  },
  async created() {
    let id = this.$props.id;
    this.$data.cycleExercises = await store.dispatch('getFromCycle', {cycleId: id, page: 0})
    await store.dispatch('getAllExercises')
    console.log('hola')
  },


}
</script>

<style scoped>

</style>