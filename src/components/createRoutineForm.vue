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
              v-model="difficulty"
              :items="items"
              :rules="[v => !!v || 'Difficulty is required']"
              label="Difficulty"
              required
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-select
              v-model="color"
              :items="colors"
              :rules="[v => !!v || 'Color is required']"
              label="Color"
              required
          ></v-select>

        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-checkbox
              v-model="isPublic"
              label="Is public?"
          ></v-checkbox>
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
</template>

<script>
import {store} from "../store";

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
    items: [ 'rookie', 'beginner', 'intermediate', 'advanced', 'expert' ],
    colors: [ 'green', 'blue', 'red', 'orange', 'yellow' ],
    name: null,
    detail: null,
    difficulty: null,
    isPublic: false,
    color: null
  }),
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        console.log('WTF')
        let result = await store.dispatch('create', {
          name: this.name,
          detail: this.detail,
          difficulty: this.difficulty,
          isPublic: this.isPublic,
          metadata: {color: this.color}
        })
        await this.$router.push(`/details/${result.id}`)
      } else
        console.log('Rejected')
    },
    reset () {
      this.$refs.form.reset()
    },
  },
}
</script>