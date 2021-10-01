<template>
  <v-carousel height="150"  hide-delimiter-background hide-delimiters>
    <v-carousel-item v-for="blocks in workouts" v-bind:key="blocks.id">
      <v-container>
        <v-row align="center" justify="center">
          <h3> {{blocks.blockName}}: {{blocks.sets}} sets </h3>
        </v-row>


        <v-row align="center"
               justify="center">
          <v-col cols="1"></v-col>
          <v-col v-for="excercises in blocks.exercises" v-bind:key="excercises.id" align-self="center" >
            <v-card rounded elevation="5" color="grey lighten-2">
              <v-card-title>
                {{excercises.eName}}
              </v-card-title>
              <v-card-text>
                {{excercises.quantity}} {{excercises.units}}
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="1"></v-col>

        </v-row>
      </v-container>



    </v-carousel-item>

  </v-carousel>

</template>

<script>



export default {
  name: "blocksCarousel",
  props: ['workouts'],

}
</script>

<style scoped>

</style>