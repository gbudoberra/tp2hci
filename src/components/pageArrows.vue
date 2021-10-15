<template>
  <v-row justify="center">
    <v-col cols="2">
      <v-btn :disabled="!prevCondition" class="ma-2" color="primary" @click="prevPage">
        <v-icon dark left>
          mdi-arrow-left
        </v-icon>
        Previous
      </v-btn>
    </v-col>
    <v-col cols="2">
      <v-btn class="ma-2" color="primary" @click="nextPage" :disabled="!nextCondition">
        Next
        <v-icon dark right>
          mdi-arrow-right
        </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "pageArrows",
  props: ['prevCondition', 'nextCondition'],
  methods:{
    prevPage(){
      this.$emit('prevPage')
    },
    nextPage(){
      this.$emit('nextPage')
    }
  }
}
</script>

<style scoped>

</style>