<template>
  <v-container>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col>

  <routine-main-card color="indigo lighten-4">
    <template v-slot:body>

      <v-container>

        <v-row>


          <v-col>
            <v-card-title class="text-h5">{{order}}. {{ title }}</v-card-title>
            <v-card-subtitle class="text-h6" v-text="detail">Detail</v-card-subtitle>
            <v-card-subtitle class="text-h7" v-text="type">Type</v-card-subtitle>
            <v-card-subtitle class="text-h7">Repetitions: {{repetitions}}</v-card-subtitle>
          </v-col>
          <v-col align="end">
            <v-row>
              <v-col align="end" v-if="isMyRoutine">

                <confirmation-pop-up v-on:confirmation="deleteCycle" msg="Remove cycle from this routine?" >
                  <template v-slot:button>
                    <v-icon>delete</v-icon>
                  </template>
                </confirmation-pop-up>
                <pop-up-edit-cycle title="Edit Cycle" :routine-id="routineId" :cycle-id="id"
                                   :old-title="title" :old-detail="detail" :old-repetitions="repetitions" :old-type="type" :old-order="order"
                >
                  <template v-slot:button>
                    <v-icon>edit</v-icon>
                  </template>
                </pop-up-edit-cycle>

              </v-col>

            </v-row>


          </v-col>

<!--          <v-col cols="5" align="end" align-self="center">-->
            <v-container v-if="cycleExercises">
              <exercise-list :cycleId="id" :routineId="routineId"></exercise-list>
            </v-container>
<!--          </v-col>-->

          <v-col cols="1"></v-col>



        </v-row>

      </v-container>
    </template>
  </routine-main-card>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>

</template>

<script>


import RoutineMainCard from "./mainCard";
import ExerciseList from "./cardComplements/excersiceList"
import {store} from "../store";
import PopUpEditCycle from "./popUpEditCycle";

import confirmationPopUp from "@/components/confirmationPopUp";
// import {store} from "../store";
// import storeE from '../store/modules/exercises'
export default {
  name: "workoutBlock",
  components: {PopUpEditCycle, RoutineMainCard, ExerciseList, confirmationPopUp},
  props:['title', 'detail', 'id', 'repetitions', 'type', 'isMyRoutine', 'routineId', 'order'],
  data() {
    return {
      // loading: false,
      cycleExercises: null
    }
  }
  ,
  methods:{
    deleteCycle() {
      store.dispatch('deleteCycle',{routineId: this.$props.routineId,
      cycleId: this.$props.id})
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