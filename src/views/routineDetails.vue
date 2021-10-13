<template>
<v-container v-if="routines.routine">
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

      <v-row v-if="cycles.cycles">
      <v-row v-for="cycle in cycles.cycles.content" :key="cycle.id">
          <v-col>
          <workout-block :title="cycle.name" :detail="cycle.detail" :repetitions="cycle.repetitions" :id="cycle.id"/>
          </v-col>
      </v-row>
      </v-row>
</v-container>
</template>


<script>
// import storeR from "../store/modules/routines";
// import storeC from "../store/modules/cycles";
import RoutineTitleCard from "../components/routineDetailTitleCard";
import {mapState} from "vuex";
import WorkoutBlock from "../components/workoutBlock";
import GoBack from "../components/goBack";
import {store} from "../store";
export default {
  name: "routineDetails",
  components: {WorkoutBlock, RoutineTitleCard , GoBack},
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