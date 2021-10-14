
<template>
  <v-container v-if="!loading">
      <v-row fluid
             v-for="routine in routines.routines.content"
             :key="routine.id"
      >
        <explore-routine :routine="routine"/>
      </v-row>
    <page-arrows v-if="routines" v-on:nextPage="nextPageRoutines" v-on:prevPage="prevPageRoutines" :next-condition="!routines.isRoutinesLast" :prev-condition="routines.routinesPage!==0"/>
  </v-container>
  <v-container v-else>
      <loading-bar :loading="loading"/>
  </v-container>
</template>

<script>
import ExploreRoutine from "../components/exploreRoutine";
import { mapState } from 'vuex'
import {store} from "../store";
import PageArrows from "../components/pageArrows";
import LoadingBar from "../components/loadingBar";
export default {
  name: "Explore",
  components: {LoadingBar, PageArrows, ExploreRoutine},
  computed: {
    ...mapState({
      routines: 'routines',
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
        await store.dispatch('getAllRoutines')
      this.$data.loading = false
    },
    async prevPageRoutines(){
      this.$data.loading = true
      await store.commit('prevPageRoutines')
      await store.dispatch('getAllRoutines')
      this.$data.loading = false

    }
  },
  async beforeMount() {
    this.$data.loading = true
    await store.commit('resetPage')
    await store.dispatch('getAllRoutines');
    console.log('getAll')
    this.$data.loading = false
  }
};
</script>

<style scoped>

</style>