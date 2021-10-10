<template>
  <v-container>
    <v-row fluid v-for="routine in favorites.content" :key="routine.id">
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
      favorites: 'favorites',
      Loading: 'Loading'
    })
  },
  beforeMount() {
    store.actions.getAllFavorites()
    console.log('getAll')
  }
}
</script>

<style scoped>

</style>