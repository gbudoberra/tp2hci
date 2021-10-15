<template>
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
              :items="items"
              label="Type"
              required
          ></v-select>

        </v-col>
      </v-row>

      <v-row>
        <v-col align="center">
          <v-btn
              :disabled="!valid"
              class="accent mr-4"
              @click="validate"
          >
            Confirm
          </v-btn>
        </v-col>
        <v-col align="center">
          <v-btn
              class="secondary mr-4"
              @click="dialog=false"
          >
            Cancel
          </v-btn>
        </v-col>
      </v-row>

    </v-container>
  </v-form>
</template>

<script>
import {store} from "../../store";

export default {
  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 25) || 'Name must be less than 25 characters',
    ],
    detailRules: [
      v => !!v || 'Detail is required',
    ],
    items: ['exercise', 'rest'],
    name: null,
    detail: null,
    type: 'exercise'
  }),
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        await store.dispatch('newExercise', {
          name: this.name,
          detail: this.detail,
          type: this.type
        })

      } else
        console.log('Rejected')
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>