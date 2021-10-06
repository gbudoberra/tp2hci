import myRoutines from './myRoutines';
<template>
  <v-container>
    <v-row fluid v-for="routine in routines" :key="routine.id">
      <routine :routine="routine"/>
    </v-row>
  <create-routine-btn/>
  </v-container>
</template>

<script>
import store from "../store/routines";
import user from "../store/user"
import Routine from "../components/routine";
import CreateRoutineBtn from "../components/createRoutineBtn";



export default {
  name: "MyRoutines",
  data:()=>({
    // Hay que hacer esto general
    // Computed?
    routines: store.data().routines.filter(routine => {return routine.pID===user.user.id}),
  }),

  components: {CreateRoutineBtn, Routine}
}
</script>

<style scoped>

</style>