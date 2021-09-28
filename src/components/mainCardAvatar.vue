<template>
  <v-row
      align="center"
      class="fill-height"
  >
  <v-col
      class="pa-0"
      cols="12"
      align="center" align-self="center"
  >
    <v-avatar
        align="center" class="justify-center" size="100"
    >
      <v-img :src="picSrc"></v-img>
    </v-avatar>


    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          {{pName}}
        </v-list-item-title>
        <v-list-item-subtitle>{{pDes}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

  </v-col>
    </v-row>
</template>

<script>
export default {
  name: "main-card-avatar",
  props: ['pDes', 'pName', 'picSrc']
}
</script>

<style scoped>

</style>