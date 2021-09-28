<template>
<v-container>
      <v-row>
        <v-col>
        <routine-title-card :id="routine.id" :color="routine.color" :title="routine.title"></routine-title-card>
        </v-col>
      </v-row>


        <v-row v-for="block in routine.workoutBlocks" :key="block.id">
          <v-col>
          <workout-block :color="routine.color" :title="block.blockName" :units="block.units" :qty="block.sets" :exercises="block.exercises"></workout-block>
          </v-col>
        </v-row>

</v-container>
</template>


<script>
import store from "../store";
import RoutineTitleCard from "../components/routineDetailTitleCard";
import WorkoutBlock from "../components/workoutBlock";
export default {
  name: "routineDetails",
  components: {WorkoutBlock, RoutineTitleCard},
  data() {
    return{
      routineId: Number(this.$route.params.id),
      name: store.data().routines
    }
  },
  props: {
// routine:{
//   type: string,
//       required: true
// }
  },
  computed: {
    routine: {
      // getter
      get: function () {
        return store.data().routines.find(r => r.id===this.routineId)
      },
      },
    blocks: {
      get: function () {
        return store.data().routines.find(r => r.id===this.routineId).workoutBlocks
      }
    }
    },
  methods:{
    favs: store.methods.favs,

  }
  }

</script>

<style scoped>

</style>