<template>
<v-container v-if="routines.routine">
      <v-row>
        <v-col>
          <go-back/>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1"/>
        <v-col>
          <routine-title-card :id="routines.routine.id" :color="routines.routine.metadata.color" :title="routines.routine.name"></routine-title-card>
        </v-col>
      </v-row>

      <template v-if="cycles.cycles">
      <v-row  v-for="cycle in cycles.cycles.content" :key="cycle.id">
          <v-col>
          <workout-cycle :type="cycle.type" :title="cycle.name" :detail="cycle.detail" :repetitions="cycle.repetitions" :id="cycle.id"/>
          </v-col>
      </v-row>
        <v-row>
          <v-col align="center" cols="10">
            <pop-up-cycle title="New Cycle" :routineId="routines.routine.id" ></pop-up-cycle>
          </v-col>

        </v-row>
      </template>
</v-container>
</template>


<script>
// import storeR from "../store/modules/routines";
// import storeC from "../store/modules/cycles";
import RoutineTitleCard from "../components/routineDetailTitleCard";
import {mapState} from "vuex";
import WorkoutCycle from "../components/workoutCycle";
import GoBack from "../components/goBack";
import {store} from "../store";
import PopUpCycle from "@/components/popUpCycle";
export default {
  name: "routineDetails",
  components: {PopUpCycle, WorkoutCycle, RoutineTitleCard , GoBack},
  computed: {
    ...mapState({
      routines: 'routines',
      cycles: 'cycles'
    })
    },
  beforeMount(){
    // storeR.actions.getRoutine(this.$route.params.id)
    let ID = this.$route.params.id;
    store.dispatch('getRoutine', {routineId:ID})
    store.dispatch('get', {routineId:ID})
    // storeC.actions.get(this.$route.params.id)
    console.log('getDetail')
  }
  }

</script>

<style scoped>

</style>