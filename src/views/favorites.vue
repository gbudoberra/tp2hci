<template>
  <v-container v-if="!loading">
    <v-row fluid v-for="routine in favs.routines.content" :key="routine.id">
      <routine :routine="routine"/>
    </v-row>
    <v-row>
      <page-arrows v-on:nextPage="nextPageRoutines" v-on:prevPage="prevPageRoutines" :next-condition="!favs.isRoutinesLast" :prev-condition="favs.routinesPage!==0"/>
    </v-row>
  </v-container>
  <v-container v-else>
    <loading-bar :loading="loading"/>
  </v-container>
</template>

<script>

import Routine from "../components/routine"
import {mapState} from "vuex";
import {store} from "../store";
import PageArrows from "../components/pageArrows";
import LoadingBar from "../components/loadingBar";
export default {
  name: "Favorites",
  components: {LoadingBar, PageArrows, Routine},
  computed: {
    ...mapState({
      favs: 'routines',
    })
  },
  data() {
    return {
      loading: false
    }
  },
  methods:{
    async nextPageRoutines(){
      this.$data.loading = true
      await store.commit('nextPageRoutines')
      await store.dispatch('getAllFavorites')
      this.$data.loading = false
    },
    async prevPageRoutines(){
      this.$data.loading = true
      await store.commit('prevPageRoutines')
      await store.dispatch('getAllFavorites')
      this.$data.loading = false

    }
  },
  async beforeMount() {
    this.$data.loading = true
    await store.commit('resetPage')
    await store.dispatch('getAllFavorites');
    console.log('getAll')
    this.$data.loading = false
  }
}
</script>

<style scoped>

</style>