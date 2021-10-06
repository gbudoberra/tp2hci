
<template>
  <div>
    <v-row fluid
           v-for="routine in routines"
           :key="routine.id"
    >
      <explore-routine :routine="routine"/>
    </v-row>



  </div>
</template>

<script>
import ExploreRoutine from "../components/exploreRoutine";
import store from "../store/routines";
export default {
  name: "Explore",
  components: {ExploreRoutine},
  data: () => ({
    routines: store.data().routines,
  }),
};
</script>

<style scoped>

</style>