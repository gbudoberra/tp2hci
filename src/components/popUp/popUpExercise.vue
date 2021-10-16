<template>
  <v-container>
    <v-btn
        @click="dialog=true"
        outlined rounded
        class="accent white--text"
    >
      <slot name="button"/>
      <v-dialog
          v-model="dialog"
          width="500"
          overlay-color="black"
      >


        <v-card color="white" rounded>
          <v-card-title>{{ title }}</v-card-title>
          <v-form
              ref="form"
              v-model="valid"
              lazy-validation
          >
            <v-container>

              <v-row>
                <v-col>
                  <v-text-field
                      v-model="newName"
                      :counter="25"
                      :rules="exerciseAlreadyExists? nameRules1 : nameRules"
                      label="Name"
                      :required="!exerciseAlreadyExists"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-text-field
                      v-model="newDetail"
                      :rules="exerciseAlreadyExists? []:detailRules"
                      label="Detail"
                      :required="!exerciseAlreadyExists"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-select
                      v-model="newType"
                      :items="items"
                      label="Type"
                      :required="!exerciseAlreadyExists"
                  ></v-select>

                </v-col>
              </v-row>

              <v-row>
                <v-col align="center">
                  <v-btn
                      class="accent mr-4"
                      @click="validate"
                  >
                    Confirm
                  </v-btn>
                </v-col>
                <v-col align="center">
                  <v-btn
                      class="secondary mr-4"
                      @click="reset()"
                  >
                    Reset Form
                  </v-btn>
                </v-col>
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
        </v-card>

      </v-dialog>
    </v-btn>
  </v-container>
</template>

<script>


import {store} from "../../store";

export default {
  name: "popUpExercise",
  components: {},
  props: ['title', 'exerciseAlreadyExists', 'name', 'detail', 'type', 'id'],
  data: () => ({
    dialog: false,
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 25) || 'Name must be less than 25 characters',
    ],
    nameRules1: [
      v => (!v || v.length <= 25) || 'Name must be less than 25 characters',
    ],
    detailRules: [
      v => !!v || 'Detail is required',
    ],
    typeRules: [
      v => !!v || 'Type is required',
    ],
    items: ['exercise', 'rest'],
    newName: null,
    newDetail: null,
    newType: null,
    alert: false,
    errorMsg: null,
  }),
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        try {
          this.alert = false
          if (this.$props.exerciseAlreadyExists) {
            await store.dispatch('modifyExercise', {
              id: this.$props.id,
              name: this.$data.newName || this.$props.name,
              detail: this.$data.newDetail || this.$props.detail,
              type: this.$data.newType || this.$props.type,
            })
          } else {
            await store.dispatch('newExercise', {
              name: this.newName,
              detail: this.newDetail,
              type: this.newType
            })
          }
        } catch (error) {
          console.log(error)
          if (error.code === 2) {
            if (error.details[0] === ("UNIQUE constraint failed: Exercise.userId, Exercise.name")) {
              this.$data.errorMsg = 'Exercise ' + this.newName + ' already exists'
              this.$data.alert = true
            }
          }
        }
        if (!this.alert)
          this.dialog = false
      } else
        console.log('Rejected')
    },
    reset() {
      this.$refs.form.reset()
    },

  },
  created() {
        this.$data.newName = this.$props.name
        this.$data.newDetail = this.$props.detail
        this.$data.newType = this.$props.type
  }
}
</script>

<style scoped>

</style>