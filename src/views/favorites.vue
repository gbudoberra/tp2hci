<template>
  <v-container>
    <v-row fluid v-for="routine in routines" :key="routine.id">
      <routine :routine="routine"/>
    </v-row>
  </v-container>
</template>

<script>
import store from "../store/routines";
import Routine from "../components/routine"
export default {
  name: "Favorites",
  data:()=>({
    // Hay que hacer esto general
    // Computed?
     favRou: store.data().favRoutines,
    routines: store.data().routines.filter(routine => {
      return store.data().favRoutines.includes(routine.id)}),   // Computed?
  }),
  components: {Routine}
}
</script>

<style scoped>

</style>