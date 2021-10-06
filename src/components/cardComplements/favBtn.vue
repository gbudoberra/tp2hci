<template>
  <v-btn icon color="#FAC710" @click.prevent="favs(routineId)">
    <v-icon size="50" class="active" v-if="favRoutines.includes(routineId)">mdi-star</v-icon>
    <v-icon v-else color="black" size="50">mdi-star-outline</v-icon>
  </v-btn>
</template>

<script>
import store from "../../store/routines";
export default {
  name: "favBtn",
  data: () => ({
    routines: store.data().routines,
    favRoutines: store.data().favRoutines,
  }),

  methods:{
    favs: store.methods.favs
  },
  props: ['routineId'],
}
</script>

<style scoped>

</style>