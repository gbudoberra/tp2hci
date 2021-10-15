<template>
<v-container v-if="!loading">
      <v-row>
        <v-col>
          <go-back/>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1"/>
        <v-col>
          <routine-title-card :isMyRoutine="security.username===routines.routine.user.username"
                              color-back="indigo lighten-5" :id="routines.routine.id"
                              :color="routines.routine.metadata.color" :detail="routines.routine.detail"
                              :title="routines.routine.name" :difficulty="routines.routine.difficulty"
          :is-public="routines.routine.isPublic"></routine-title-card>
        </v-col>
      </v-row>

      <template v-if="cycles.cycles">
      <v-row  v-for="cycle in cycles.cycles.content" :key="cycle.id">
          <v-col>
          <workout-cycle :isMyRoutine="security.username===routines.routine.user.username" :routineId="routines.routine.id"
                         :type="cycle.type" :order="cycle.order" :title="cycle.name" :detail="cycle.detail" :repetitions="cycle.repetitions" :id="cycle.id"/>
          </v-col>
      </v-row>
        <v-row>
          <page-arrows v-on:nextPage="nextCyclePage" v-on:prevPage="prevCyclePage" :next-condition="!cycles.cyclesIsLast" :prev-condition="cycles.cyclesPage!==0"/>
        </v-row>
        <v-row>
          <v-col align="center" cols="10">
            <pop-up-cycle v-if="security.username===routines.routine.user.username" title="New Cycle" :routineId="routines.routine.id" ></pop-up-cycle>
          </v-col>

        </v-row>
      </template>
</v-container>
  <loading-bar v-else loading="loading"/>
</template>


<script>
import RoutineTitleCard from "../components/routineDetailTitleCard";
import {mapState} from "vuex";
import WorkoutCycle from "../components/workoutCycle";
import GoBack from "../components/goBack";
import {store} from "../store";
import PopUpCycle from "../components/popUpCycle";
import PageArrows from "../components/pageArrows";
import LoadingBar from "../components/loadingBar";
export default {
  name: "routineDetails",
  components: {LoadingBar, PageArrows, PopUpCycle, WorkoutCycle, RoutineTitleCard , GoBack},
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState({
      routines: 'routines',
      cycles: 'cycles',
      security: 'security'
    }),
    },
  methods:{
    async nextCyclePage() {
      this.$data.loading = true
      store.commit('nextCyclePage')
      await store.dispatch('get', {routineId: this.$route.params.id})
      this.$data.loading = false
    },
    async prevCyclePage() {
      this.$data.loading = true
      store.commit('prevCyclePage')
      await store.dispatch('get', {routineId: this.$route.params.id})
      this.$data.loading = false
    }
  },
  async beforeMount(){
    this.$data.loading = true
    let ID = this.$route.params.id;
    await store.dispatch('getRoutine', {routineId:ID})
    await store.commit('resetCyclePages')
    await store.dispatch('get', {routineId:ID})
    this.$data.loading = false
  }
  }

</script>

<style scoped>

</style>