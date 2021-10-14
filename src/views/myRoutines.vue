import myRoutines from './myRoutines';
<template>
  <v-container v-if="routines">
    <v-row fluid v-for="routine in routines.routines.content" :key="routine.id">
      <routine :routine="routine"/>
    </v-row>
    <v-row>
      <v-col align="center" cols="10">
        <pop-up title="New Routine">
          <template v-slot:formSlot>
            <create-routine-form/>
          </template>
        </pop-up>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import {store} from "@/store";
import Routine from "../components/routine";

import {mapState} from "vuex";
import PopUp from "../components/popUp";
import CreateRoutineForm from "../components/createRoutineForm";



export default {
  name: "MyRoutines",
  computed: {
    ...mapState({
      routines: 'routines',
      Loading: 'Loading',
    })
  },
  beforeMount() {
    store.dispatch('getMyRoutines')
    console.log('getAll')
  },
  components: {PopUp, Routine, CreateRoutineForm}
}
</script>

<style scoped>

</style>