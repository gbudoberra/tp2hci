<template>
  <v-card rounded elevation="5" color="grey lighten-3" >
    <v-container  >
      <v-row>
            <v-card-title class="font-weight-bold">
               {{order + '. ' + name}}
            </v-card-title>

        <v-card-text>
          {{reps}} Repetitions
        </v-card-text>

        <v-card-text>
          Duration: {{duration}} s
        </v-card-text>
      </v-row>
      <v-row>

        <v-col align="end">
          <v-btn outlined rounded small><v-icon>delete</v-icon></v-btn>
          <v-btn outlined rounded small><v-icon>edit</v-icon></v-btn>
        </v-col>
      </v-row>



    </v-container>
  </v-card>


</template>

<script>
export default {
  name: "exerciseVCard",
  props: ['name', 'reps', 'duration', 'order']
}
</script>

<style scoped>

</style>