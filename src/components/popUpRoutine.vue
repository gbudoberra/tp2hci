<template>
  <v-container>
    <v-dialog
        v-model="dialog"
        width="500"
        overlay-color="black"
    >
      <template v-slot:activator="{ on, attrs }">
          <v-btn
              x-large
              dark
              v-bind="attrs"
              v-on="on" color="blue darken-4" fixed bottom rounded>
            Create routine
          </v-btn>
      </template>

      <v-card color="white" height="600" rounded>
        <v-card-title>{{title}}</v-card-title>
        <create-routine-form :color="null" name='' detail='' :is-public="false" :difficulty="null" :id="null"/>
      </v-card>

    </v-dialog>
  </v-container>
</template>

<script>
import CreateRoutineForm from "./createRoutineForm";
export default {
  components: { CreateRoutineForm},
  data () {
    return {
      dialog: false,
    }
  },
  props: ['title']
}
</script>