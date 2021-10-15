<template>
  <v-row>
    <v-col cols="6" align="right">
      <h1 class="text-h4">Exercises</h1>
    </v-col>
    <v-col cols="6" alight="left">
      <v-btn
          outlined
          rounded
          @click="dialog=true"
          class="accent white--text">
        <v-icon>add</v-icon>
        <v-dialog
            v-model="dialog"
            width="1000"
            overlay-color="black"
        >


          <v-card color="white" rounded>
            <v-card-title>Complete form</v-card-title>

            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
              <v-container>

                <v-row>
                  <v-col cols="2"></v-col>
                  <v-col>
                    <v-text-field
                        v-model="repetitions"
                        :rules="[v => !!v || 'Repetition is required']"
                        type="number"
                        label="repetitions"
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2"></v-col>
                </v-row>

                <v-row>
                  <v-col cols="2"></v-col>
                  <v-col>
                    <v-text-field
                        v-model="order"
                        type="number"
                        :rules="[v => !!v || 'Order is required']"
                        label="order"
                        required
                    ></v-text-field>

                  </v-col>
                  <v-col cols="2"></v-col>
                </v-row>

                <v-row>
                  <v-col cols="2"></v-col>
                  <v-col>
                    <v-text-field
                        v-model="duration"
                        type="number"
                        :rules="[v => !!v || 'Duration is required']"
                        label="duration"
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2"></v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-alert type="error"
                             v-model="alert"
                             dismissible
                    >
                      {{ this.errorMsg }}
                    </v-alert>
                  </v-col>

                </v-row>
              </v-container>
            </v-form>


            <v-card-title>Select exercise</v-card-title>

            <v-container v-if="exercises">
              <v-row>
                <v-col align="center">
                  <v-col>


                    <v-row>

                      <div v-show="exercises.exercisePage!==0">
                        <v-btn class="ma-2" color="blue lighten-3" dark @click="prevPage">
                          <v-icon dark left>
                            mdi-arrow-left
                          </v-icon>
                          Previous
                        </v-btn>
                      </div>
                      <div>
                        <v-btn class="ma-2" color="blue lighten-3" dark @click="nextPage"
                               v-show="!exercises.exerciseLastPage">
                          Next
                          <v-icon dark right>
                            mdi-arrow-right
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-row>
                  </v-col>
                </v-col>
              </v-row>
              <v-row>
                <v-layout>
                  <v-flex>
                    <v-container fluid grid-list-md>
                      <v-layout row wrap>
                        <v-flex
                            xs12
                            md6
                            lg4
                            v-for="exercise in exercises.exercises.content" v-bind:key="exercise.id"
                        >

                          <v-card height="100%" class="tertiary elevation-5 flexCard" :disabled="!valid"
                                  @click="validate(exercise.id,exercise.name)">
                            <v-col cols="8">


                              <v-card-title class="Padding">{{ exercise.name }}</v-card-title>
                              <v-card-subtitle class="Padding">{{ exercise.detail }}</v-card-subtitle>
                              <v-card-text class="Padding">Type: {{ exercise.type }}</v-card-text>


                            </v-col>


                          </v-card>

                        </v-flex>
                      </v-layout>
                    </v-container>

                  </v-flex>

                </v-layout>

              </v-row>

            </v-container>


          </v-card>

        </v-dialog>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import {store} from "@/store";
import {mapState} from "vuex";

export default {
  name: "AddExerciseBtn",
  props: ['cycleId'],
  components: {},
  computed: {
    ...mapState({
      exercises: 'exercises'
    })
  },
  data: () => ({
    dialog: false,
    repetitions: null,
    duration: null,
    order: null,
    valid: true,
    alert: false,
    errorMsg: null,
  }),
  methods: {
    nextPage() {
      store.dispatch('exerciseNextPage')
    },
    prevPage() {
      store.dispatch("exercisePrevPage")
    },
    async addCycleExercise(exerciseId) {
      await store.dispatch('addCycleExercise', {
        cycleId: this.$props.cycleId,
        exerciseId: exerciseId,
        body: {
          repetitions: parseInt(this.repetitions),
          order: parseInt(this.order),
          duration: parseInt(this.duration)
        }

      })

    },
    async validate(exerciseId, exerciseName) {
      if (this.$refs.form.validate()) {
        try {
          this.alert = false
          await this.addCycleExercise(exerciseId)
          this.$emit('updateExercises')
        } catch (error) {
          console.log(error)
          if (error.code === 2) {
            if (error.details[0] === ("UNIQUE constraint failed: Cycle_Exercise.cycleId, Cycle_Exercise.order")) {
              this.$data.errorMsg = 'Order ' + this.order + ' already exists'
              this.$data.alert = true
            } else if (error.details[0] === "UNIQUE constraint failed: Cycle_Exercise.cycleId, Cycle_Exercise.exerciseId") {
              this.$data.errorMsg = 'Exercise ' + exerciseName + ' already exists'
              this.$data.alert = true
            }
          }
        }
        if (!this.alert)
          this.dialog = false

      } else
        console.log('Rejected')
    },
  },

}
</script>

<style scoped>

</style>