<template>
  <v-container v-if="routines">
    <v-row fluid v-for="routine in routines.routines.content" :key="routine.id">
      <routine :routine="routine"/>
    </v-row>
    <v-row>
      <v-col align="center" cols="10">
        <pop-up-routine title="New Routine"></pop-up-routine>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import {store} from "@/store";
import Routine from "../components/routine";

import {mapState} from "vuex";
import PopUpRoutine from "@/components/popUpRoutine";



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
  components: { PopUpRoutine, Routine}
}
</script>

<style scoped>

</style>