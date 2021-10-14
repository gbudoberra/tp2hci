<template>
  <v-container>
    <v-btn
        @click="dialog=true"
        >
      <slot name="button"/>
      <v-dialog
          :value="dialog"
          width="500"
          overlay-color="black"
      >


        <v-card color="white" height="600" rounded>
          <v-card-title>{{title}}</v-card-title>
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
                      color="success"
                      class="mr-4"
                      @click="validate"
                  >
                    Submit
                  </v-btn>
                </v-col>
                <v-col align="center">
                  <v-btn
                      color="error"
                      class="mr-4"
                      @click="reset"
                  >
                    Reset Form
                  </v-btn>
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


import {store} from "../store";

export default {
  name: "popUpExercise",
  components:{  },
  props:['title', 'exerciseAlreadyExists', 'name', 'detail', 'type', 'id'],
  data: () => ({
    dialog:false,
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 25) || 'Name must be less than 25 characters',
    ],
    nameRules1:[
      v => (!v || v.length <= 25) || 'Name must be less than 25 characters',
    ],
    detailRules: [
      v => !!v || 'Detail is required',
    ],
    typeRules:[
      v => !!v || 'Type is required',
    ],
    items: [ 'exercise','rest' ],
    newName: null,
    newDetail: null,
    newType:null,
  }),
    methods: {
      async validate() {
        if (this.$refs.form.validate()) {

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
          this.$data.dialog = false
        } else
          console.log('Rejected')
      },
      reset() {
        this.$refs.form.reset()
      },
    }
}
</script>

<style scoped>

</style>