<template>
  <v-card rounded elevation="5" color="grey lighten-2">
    <v-card-subtitle class="font-weight-bold">
      {{id + '. ' + eName}}
    </v-card-subtitle>
    <v-card-text>
      {{quantity}} {{units}}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "exerciseVCard",
  props: ['eName', 'quantity', 'units', 'id']
}
</script>

<style scoped>

</style>