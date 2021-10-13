
<template>
  <v-container v-if="routines">
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
import { mapState } from 'vuex'
import {store} from "../store";
export default {
  name: "Explore",
  components: {ExploreRoutine},
  computed: {
    ...mapState({
      routines: 'routines',
      Loading: 'Loading',
    })
  },
  beforeMount() {
    store.dispatch('getAllRoutines');
    console.log('getAll')
  }
};
</script>

<style scoped>

</style>