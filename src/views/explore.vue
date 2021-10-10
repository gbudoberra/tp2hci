
<template>
  <div>
    <v-row fluid
           v-for="routine in routines.content"
           :key="routine.id"
    >
      <explore-routine :routine="routine"/>
    </v-row>



  </div>
</template>

<script>
import ExploreRoutine from "../components/exploreRoutine";
import store from "../store/modules/routines";

export default {
  name: "Explore",
  components: {ExploreRoutine},
  data: () => ({
    routines: store.state.routines,
  }),
  // computed: {
  //   // routines: store.getters.getRoutines(store.state)
  // },

  beforeCreate() {
    store.actions.getAll()
    console.log('getAll')
  }
};
</script>

<style scoped>

</style>