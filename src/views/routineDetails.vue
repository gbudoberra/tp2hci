<template>
<v-container v-if="routines">
      <v-row>
        <v-col>
        <routine-title-card :id="routines.routine.id" :color="routines.routine.metadata.color" :title="routines.routine.name"></routine-title-card>
        </v-col>
      </v-row>


<!--        <v-row v-for="block in routine.workoutBlocks" :key="block.id">-->
<!--          <v-col>-->
<!--          <workout-block :color="routine.color" :title="block.blockName" :units="block.units" :qty="block.sets" :exercises="block.exercises"></workout-block>-->
<!--          </v-col>-->
<!--        </v-row>-->

</v-container>
</template>


<script>
import store from "../store/modules/routines";
import RoutineTitleCard from "../components/routineDetailTitleCard";
import {mapState} from "vuex";
// import WorkoutBlock from "../components/workoutBlock";
export default {
  name: "routineDetails",
  components: { RoutineTitleCard},
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