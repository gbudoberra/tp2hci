<template>
  <v-container>
    <v-btn
        x-large
        dark
        @click="dialog=true"
        color="blue darken-4" fixed bottom rounded>
      Add cycle
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
                    v-model="name"
                    :counter="25"
                    :rules="nameRules"
                    label="Name"
                    required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                    v-model="detail"
                    :rules="detailRules"
                    label="Detail"
                    required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-select
                    v-model="type"
                    :items="types"
                    :rules="typeRules"
                    label="Type"
                    required
                ></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                    v-model="order"

                    :rules="[v => !!v || 'Order is required']"
                    label="Order"
                    required
                    type="number"
                ></v-text-field>

              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                    v-model="repetitions"
                    type="number"
                    :rules="[v => !!v || 'Repetitions are required']"
                    label="Repetitions"
                    required
                ></v-text-field>

              </v-col>
            </v-row>


            <v-row>
              <v-col align="center">

                <v-btn
                    :disabled="!valid"
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

import {store} from "@/store";
export default {
  name: "popUpCycle",
  components:{  },
  props:['routineId', 'title'],
  data: () => ({
    dialog:false,
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 25) || 'Name must be less than 25 characters',
    ],
    detailRules: [
      v => !!v || 'Detail is required',
    ],
    typeRules:[
      v => !!v || 'Type is required',
    ],
    types: [ 'warmup', 'exercise', 'cooldown' ],
    name: null,
    detail: null,
    type:null,
    repetitions: null,
    order:null
  }),
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        await store.dispatch('addCycle', {
          routineId: this.$props.routineId,
          body: {
            name: this.name,
            detail: this.detail,
            type: this.type,
            order: parseInt(this.order),
            repetitions: parseInt(this.repetitions),
            metadata:null
          }

        })
        this.dialog=false
      } else
        console.log('Rejected')
    },
    reset () {
      this.$refs.form.reset()
    },
  },

}
</script>

<style scoped>

</style>