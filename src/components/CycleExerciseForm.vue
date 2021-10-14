<template>
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
              rules="v => !!v || 'Repetitions is required'"
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
              rules="v => !!v || 'Order is required'"
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
              rules="v => !!v || 'Rules is required'"
              type="number"

              label="duration"
              required
          ></v-text-field>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "CycleExerciseForm",
  data:()=>({
    repetitions:null,
    duration:null,
    order:null,
    valid:false
  })
}
</script>

<style scoped>

</style>