<template>
<v-container v-if="routines">
      <v-row>
        <v-col>
          <go-back/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <routine-title-card :id="routines.routine.id" :color="routines.routine.metadata.color" :title="routines.routine.name"></routine-title-card>
        </v-col>
      </v-row>


      <v-row v-for="block in routines.workoutBlocks" :key="block.id">
          <v-col>
          <workout-block :color="routines.color" :title="block.blockName" :units="block.units" :qty="block.sets" :exercises="block.exercises"></workout-block>
          </v-col>
      </v-row>

</v-container>
</template>


<script>
import store from "../store/modules/routines";
import RoutineTitleCard from "../components/routineDetailTitleCard";
import {mapState} from "vuex";
// import WorkoutBlock from "../components/workoutBlock";
import WorkoutBlock from "../components/workoutBlock";
import GoBack from "../components/goBack";
export default {
  name: "routineDetails",
  components: {WorkoutBlock, RoutineTitleCard , GoBack},
  computed: {
    ...mapState({
      routines: 'routines'
    })
    },
  beforeMount(){
    store.actions.get(this.$route.params.id)
    console.log('getRoutine')
  }
  }

</script>

<style scoped>

</style>