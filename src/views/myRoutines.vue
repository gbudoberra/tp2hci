<template>
  <v-container v-if="!loading">
    <v-row>
      <v-col justify="center" align="center">
        <h1 id="navigation-myroutines">My Routines</h1>
        <v-divider/>
      </v-col>
    </v-row>
    <v-row fluid v-for="routine in myRoutines.routines.content" :key="routine.id">
      <routine :routine="routine"/>
    </v-row>
    <v-row>
      <v-col align="center" cols="10">
        <pop-up-routine title="New Routine">
          <template v-slot:formSlot>
            <create-routine-form/>
          </template>
        </pop-up-routine>
      </v-col>
      <page-arrows v-on:nextPage="nextPageRoutines" v-on:prevPage="prevPageRoutines" :next-condition="!myRoutines.isRoutinesLast" :prev-condition="myRoutines.routinesPage!==0"/>
    </v-row>
    <v-row>
      <v-col cols="11"/>
      <v-col>
        <order-by-menu dispatch-to-update="getMyRoutines"/>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else>
    <loading-bar :loading="loading"/>
  </v-container>
</template>

<script>
import {store} from "../store";
import Routine from "../components/routine";
import OrderByMenu from "../components/orderByMenu"
import {mapState} from "vuex";
import CreateRoutineForm from "../components/Forms/createRoutineForm";
import PopUpRoutine from "../components/popUp/popUpRoutine";
import PageArrows from "../components/pageArrows";
import LoadingBar from "../components/loadingBar";



export default {
  name: "MyRoutines",
  computed: {
    ...mapState({
      myRoutines: 'routines',
    })
  },
  methods:{
    async nextPageRoutines(){
      this.$data.loading = true
      await store.commit('nextPageRoutines')
      await store.dispatch('getMyRoutines')
      this.$data.loading = false
    },
    async prevPageRoutines(){
      this.$data.loading = true
      await store.commit('prevPageRoutines')
      await store.dispatch('getMyRoutines')
      this.$data.loading = false
    }
  },
  data() {
    return {
      loading: false
    }
  },
  async beforeMount() {
    this.$data.loading = true
    await store.commit('resetPage')
    await store.dispatch('getMyRoutines')
    console.log('getAllMyRoutines')
    this.$data.loading = false
  },
  components: {OrderByMenu, LoadingBar, PageArrows, PopUpRoutine, Routine, CreateRoutineForm}
}
</script>

<style scoped>
#navigation-myroutines {
  font-size: xxx-large;
}
</style>