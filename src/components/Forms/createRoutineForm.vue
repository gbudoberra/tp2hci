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
                        v-model="newName"
                        :counter="25"
                        :rules="routineAlreadyExists? nameRules1: nameRules"
                        label="Name"
                        :required="!routineAlreadyExists"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-text-field
                        v-model="newDetail"
                        :rules="routineAlreadyExists? []:detailRules"
                        label="Detail"
                        :required="!routineAlreadyExists"

                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-select
                        v-model="newDifficulty"
                        :items="items"
                        :rules="routineAlreadyExists? []:[v => !!v || 'Difficulty is required']"
                        label="Difficulty"
                        :required="!this.$props.routineAlreadyExists"

                    ></v-select>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-select
                        v-model="newColor"
                        :items="colors"
                        :rules="routineAlreadyExists? []:[v => !!v || 'Color is required']"
                        label="Color"
                        :required="!routineAlreadyExists"

                    ></v-select>

                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-checkbox
                        v-model="newIsPublic"
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
import {store} from "../../store";

export default {
  props: ['name', 'detail', 'difficulty', 'isPublic', 'color', 'routineAlreadyExists', 'id'],
  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 25) || 'Name must be less than 25 characters',
    ],
    nameRules1: [v => (!v || v.length <= 25) || 'Name must be less than 25 characters',],
    detailRules: [
      v => !!v || 'Detail is required',
    ],
    items: ['rookie', 'beginner', 'intermediate', 'advanced', 'expert'],
    colors: ['green', 'blue', 'red', 'orange', 'yellow'],
    newName: null,
    newDetail: null,
    newDifficulty: null,
    newIsPublic: false,
    newColor: null
  }),
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        try {
          this.alert = false
          if (this.$props.routineAlreadyExists) {
            console.log('estoy en el true')
            await store.dispatch('modify', {
              body: {
                name: this.$data.newName || this.$props.name,
                detail: this.$data.newDetail || this.$props.detail,
                difficulty: this.$data.newDifficulty || this.$props.difficulty,
                isPublic: this.$data.newIsPublic || this.$props.isPublic,
                metadata: {color: this.$data.newColor || this.$props.color},
              }, id: this.$props.id
            })
            await store.dispatch('getRoutine', {routineId: this.$props.id})
            this.$emit('dialogDisable')
          } else {
            let result = await store.dispatch('create', {
              name: this.newName,
              detail: this.newDetail,
              difficulty: this.newDifficulty,
              isPublic: this.newIsPublic,
              metadata: {color: this.newColor},
            })
            await this.$router.push(`/details/${result.id}`)
          }
        } catch (e) {
          console.log(e)
        }
      } else
        console.log('Rejected')
    }
    ,
    reset() {
      this.$refs.form.reset()
    },
  }
  ,
}
</script>