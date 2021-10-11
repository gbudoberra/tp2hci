<template>
  <v-form
      ref="form"
      v-model="valid"
      lazy-validation
  >
    <v-text-field
        v-model="name"
        :counter="25"
        :rules="nameRules"
        label="Name"
        required
    ></v-text-field>

    <v-text-field
        v-model="detail"
        :rules="detailRules"
        label="Detail"
        required
    ></v-text-field>

    <v-select
        v-model="difficulty"
        :items="items"
        :rules="[v => !!v || 'Difficulty is required']"
        label="Difficulty"
        required
    ></v-select>
    <v-select
        v-model="color"
        :items="colors"
        :rules="[v => !!v || 'Color is required']"
        label="Color"
        required
    ></v-select>
    <v-checkbox
        v-model="isPublic"
        label="Is public?"
    ></v-checkbox>

    <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
    >
      Submit
    </v-btn>

    <v-btn
        color="error"
        class="mr-4"
        @click="reset"
    >
      Reset Form
    </v-btn>
  </v-form>
</template>

<script>
import {store} from "../store";

export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 25) || 'Name must be less than 25 characters',
    ],
    detail: '',
    detailRules: [
      v => !!v || 'Detail is required',
    ],
    difficulty: null,
    items: [ 'rookie', 'beginner', 'intermediate', 'advanced', 'expert' ],
    color: null,
    colors: [ 'green', 'blue', 'red', 'orange', 'yellow' ],
    isPublic: false,
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