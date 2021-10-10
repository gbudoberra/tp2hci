
<template>
  <v-container >
      <v-row fluid
             v-for="routine in routines.routines.content"
             :key="routine.id"
      >
        <explore-routine :routine="routine"/>
      </v-row>






  </v-container>
</template>

<script>
import ExploreRoutine from "../components/exploreRoutine";
import store from "../store/modules/routines";
import { mapState } from 'vuex'
export default {
  name: "Explore",
  components: {ExploreRoutine},
  // data: () => ({
  //   routines: store.state.routines,
  // }),
  // computed: {
  //   // routines: store.getters.getRoutines(store.state)
  // },
  computed: {
    ...mapState({
      routines: 'routines',
      Loading: 'Loading',
    })
  },
  beforeMount() {
    store.actions.getAll(2)
    console.log('getAll')
  }
};
</script>

<style scoped>

</style>