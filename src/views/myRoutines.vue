import myRoutines from './myRoutines';
<template>
  <v-container v-if="routines">
    <v-row fluid v-for="routine in routines.routines.content" :key="routine.id">
      <routine :routine="routine"/>
    </v-row>
<!--  <create-routine-btn/>-->
    <pop-up></pop-up>
  </v-container>
</template>

<script>
import store from "../store/modules/routines";
import Routine from "../components/routine";
// import CreateRoutineBtn from "../components/createRoutineBtn";
import {mapState} from "vuex";
import PopUp from "../components/popUp";



export default {
  name: "MyRoutines",
  computed: {
    ...mapState({
      routines: 'routines',
      Loading: 'Loading',
    })
  },
  beforeMount() {
    store.actions.getMyRoutines()
    console.log('getAll')
  },
  components: {PopUp, Routine}
}
</script>

<style scoped>

</style>