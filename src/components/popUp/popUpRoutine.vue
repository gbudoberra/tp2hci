<template>
  <v-container>
    <v-dialog
        v-model="dialog"
        width="500"
        overlay-color="black"
    >
      <template v-slot:activator="{ on, attrs }">
          <v-btn
              x-large
              dark
              v-bind="attrs"
              v-on="on" color="blue darken-4" fixed bottom rounded>
            {{title}}
          </v-btn>
      </template>

      <v-card color="white" height="600" rounded>
        <v-card-title>{{title}}</v-card-title>
        <slot name="formSlot">
          Form
        </slot>
      </v-card>

    </v-dialog>
  </v-container>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      dialog: false,
    }
  },
  props: ['title']
}
</script>