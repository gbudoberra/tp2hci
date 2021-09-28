<template>
  <v-carousel height="150" rounded="xl"
              hide-delimiter-background
              delimiter-icon="mdi-minus"
  >
    <v-carousel-item
        v-for="exercise in exercises" :key="exercise.id"
    >
      <v-col align="center" align-self="center">

        <v-card color="white" raised height="100%">
          <v-row align-content="center" align="center">
            <v-col cols="1"></v-col>
            <v-col align="center" align-self="center">

              <v-card-title align="center">{{exercise.eName}}: {{exercise.quantity}} {{exercise.units}}</v-card-title>
            </v-col>
          </v-row>

        </v-card>

      </v-col>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "exercisesCarousel",
  props: ['exercises']
}
</script>

<style scoped>

</style>