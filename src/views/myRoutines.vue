<template>
  <v-container v-if="myRoutines">
    <v-row fluid v-for="routine in myRoutines.routines.content" :key="routine.id">
      <routine :routine="routine"/>
    </v-row>
    <v-row>
      <v-col align="center" cols="10">
        <pop-up-routine title="New Routine">
          <template v-slot:formSlot>
            <create-routine-form/>
          </template>
        </pop-up-routine>
<!--        <pop-up-routine title="New Routine"></pop-up-routine>-->
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import {store} from "../store";
import Routine from "../components/routine";

import {mapState} from "vuex";
import CreateRoutineForm from "../components/createRoutineForm";
import PopUpRoutine from "../components/popUpRoutine";



export default {
  name: "MyRoutines",
  computed: {
    ...mapState({
      myRoutines: 'routines',
      Loading: 'Loading',
    })
  },
  beforeMount() {
    store.dispatch('getMyRoutines')
    console.log('getAll')
  },
  components: {PopUpRoutine, Routine, CreateRoutineForm}
  // components: { PopUpRoutine, Routine}
}
</script>

<style scoped>

</style>