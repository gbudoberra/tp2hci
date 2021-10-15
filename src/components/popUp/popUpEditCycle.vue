<template>
  <v-btn
      @click="dialog=true"
  >
    <slot name="button"/>
    <v-dialog
        v-model="dialog"
        max-width="350"
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
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                    v-model="detail"
                    label="Detail"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-select
                    v-model="type"
                    :items="types"
                    label="Type"
                ></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                    v-model="order"
                    label="Order"
                    type="number"
                ></v-text-field>

              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                    v-model="repetitions"
                    type="number"
                    label="Repetitions"
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
                  Confirm
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
</template>

<script>
import {store} from "../../store";

export default {
  name: "popUpEditCycle",
  props:['oldTitle', 'oldDetail', 'oldRepetitions', 'oldType', 'oldOrder','routineId','cycleId', 'title'],
  data: () => ({
    dialog:false,
    valid: true,
    nameRules: [
      v => (!v || v.length <= 25) || 'Name must be less than 25 characters',
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
        await store.dispatch('modifyCycle', {
          routineId: this.$props.routineId,
          cycleId: this.$props.cycleId,
          body: {
            name: this.name || this.$props.oldTitle,
            detail: this.detail || this.$props.oldDetail,
            type: this.type || this.$props.oldType,
            order: parseInt(this.order) || this.$props.oldOrder,
            repetitions: parseInt(this.repetitions) || this.$props.oldRepetitions,
            metadata:null
          }

        })
        this.dialog=false
        this.$emit('update')
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