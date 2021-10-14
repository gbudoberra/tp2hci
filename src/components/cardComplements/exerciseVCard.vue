<template>
  <v-card rounded elevation="5" color="grey lighten-2">
    <v-card-title class="font-weight-bold">
      {{order + '. ' + name}}
    </v-card-title>
    <v-card-subtitle>
      {{reps}} Repetitions
    </v-card-subtitle>
    <v-card-text>
      Duration: {{duration}} s
    </v-card-text>
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