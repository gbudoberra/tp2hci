<template>
  <v-carousel height="150" hide-delimiter-background hide-delimiters>
    <v-carousel-item v-for="block in workouts.content" v-bind:key="block.id">
      <v-container>
        <v-row align="center" justify="center">

          <v-col cols="6" align-self="center">
            <v-card  rounded elevation="5" class="flexCard" color="grey lighten-2">
              <v-container>
              <v-row no-gutters justify="space-around">
                <v-col cols="3" align="left" align-self="center">
                  <v-btn outlined disabled fab>{{ block.order }}</v-btn>
                </v-col>
                <v-col align-self="center" align="left">
                  <v-card-title>{{ block.name }}</v-card-title>
                </v-col>
              </v-row>
              </v-container>
            </v-card>
          </v-col>

        </v-row>

      </v-container>

    </v-carousel-item>

  </v-carousel>

</template>

<script>


// import ExerciseList from "./excersiceList";
export default {
  name: "blocksCarousel",
  components: {},
  props: ['workouts'],
  created() {
    console.log('workouts', this.$props.workouts)
  }

}
</script>

<style scoped>
.flexCard {
  display: flex;
  flex-direction: row;
}

</style>