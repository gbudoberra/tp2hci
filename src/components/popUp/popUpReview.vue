<template>
  <v-btn outlined rounded @click="dialog=true">
  Review
    <v-dialog v-model="dialog" overlay-color="black" width="unset">



      <template>
        <v-card
            class="elevation-16 mx-auto"
            width="300"
        >
          <v-card-title class="text-h5">
            Rate Routine
          </v-card-title>
          <v-card-text>
            If you enjoy this routine, please take a few seconds to rate your experience. It really helps!

            <div class="text-center mt-12">
              <v-rating
                  v-model="rating"
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  empty-icon="$ratingFull"
                  hover
                  large
              ></v-rating>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="justify-space-between">
            <v-btn text @click="dialog=false">
              No Thanks
            </v-btn>
            <v-btn
                color="primary"
                text
                @click="rate()"
            >
              Rate Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <v-dialog v-model="error" width="unset">
      <v-card width="300">
        <v-card-title>Error</v-card-title>
        <v-card-subtitle>Review didn't go through.</v-card-subtitle>
        <v-card-text class="error--text">{{msgError}}</v-card-text>
        <v-card-actions>
          <v-btn @click="error=false">Dismiss</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<script>
import {store} from "../../store";

export default {
  name: "popUpReview",
  props: ['routineId'],
  data() {
    return {
      error: false,
      msgError: null,
      rating: 0,
      dialog: false
    }
  },
  methods:{
    async rate(){
      let rating = this.$data.rating
      let routineId = this.$props.routineId
      try {
        await store.dispatch('review', {rating, routineId})
      }catch (error){
        this.$data.msgError = error.details[0]
        this.$data.error = true
      }
      this.$data.dialog = false

    }
  }
}
</script>

<style scoped>

</style>