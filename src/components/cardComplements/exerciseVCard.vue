<template>
  <v-card rounded elevation="5" class="tertiary">
    <v-container>
      <v-row>
        <v-card-title class="font-weight-bold">
          {{ order + '. ' + name }}
        </v-card-title>

        <v-card-text>
          {{ reps }} Repetitions
        </v-card-text>

        <v-card-text>
          Duration: {{ duration }} s
        </v-card-text>
      </v-row>
      <v-row>

        <v-col align="end">

          <confirmation-pop-up v-if="isMyRoutine" v-on:confirmation="deleteCycleExercise" msg="Remove exercise?">
            <template v-slot:button>
              <v-icon>delete</v-icon>
            </template>
          </confirmation-pop-up>
          <!--v-btn outlined rounded small><v-icon>edit</v-icon></v-btn-->
        </v-col>
      </v-row>


    </v-container>
  </v-card>


</template>

<script>
import {store} from "@/store";
import ConfirmationPopUp from "@/components/popUp/confirmationPopUp";

export default {
  name: "exerciseVCard",
  props: ['name', 'reps', 'duration', 'order', 'id', 'cycleId', 'routineId', 'isMyRoutine'],
  methods: {
    async deleteCycleExercise() {
      console.log(this.$props.id)
      await store.dispatch('deleteCycleExercise', {cycleId: this.$props.cycleId, exerciseId: this.$props.id})
      this.$emit('delete')

    }
  },
  components: {ConfirmationPopUp},
}
</script>

<style scoped>

</style>