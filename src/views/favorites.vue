<template>
  <v-container v-if="routines">
    <v-row fluid v-for="routine in routines.favorites.content" :key="routine.id">
      <routine :routine="routine"/>
    </v-row>
  </v-container>
</template>

<script>
import store from "../store/modules/routines";
import Routine from "../components/routine"
import {mapState} from "vuex";
export default {
  name: "Favorites",
  components: {Routine},
  computed: {
    ...mapState({
      routines: 'routines',
      Loading: 'Loading'
    })
  },
  beforeMount() {
    store.actions.getAllFavorites()
    console.log('getAllFavs')
  }
}
</script>

<style scoped>

</style>