<template>
  <v-btn
      @click="dialog=true"
      outlined rounded

  >
    <slot name="button"/>
    <v-dialog
        v-model="dialog"
        max-width="350"
    >
      <v-card>
        <v-card-title class="text-h5">
          {{ msg }}
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              color="green darken-1"
              text
              @click="dialog = false; confirmation()"
          >
            YES
          </v-btn>

          <v-btn
              color="red darken-1"
              text
              @click="dialog = false; rejected()"
          >
            NO
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<script>
export default {
  name: "confirmationPopUp",
  props: ['msg'],
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    confirmation() {
      console.log('confirmation')
      this.$emit('confirmation')
    },
    rejected() {
      this.$emit('rejected')
    }
  }
}
</script>

<style scoped>

</style>