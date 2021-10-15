<template>
  <v-container>
    <v-dialog v-model="dialog" width="500" overlay-color="black">
      <v-card color="white" height="600" rounded>
        <v-card-title>ERRORRR</v-card-title>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "errorPopUp",
  data() {
    return {
      dialog: false,
    }
  }
}
</script>

<style scoped>

</style>