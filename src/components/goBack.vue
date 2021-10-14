<template>

  <v-btn @click="goBack"  rounded color="blue darken-4" dark fixed large elevation="5">
    <v-icon>
      arrow_back
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "goBack",
  methods: {
    goBack(){
      return this.$router.go(-1);
    }
  }
}
</script>

<style scoped>

</style>


<!--
<transition
name="tipo de transicion"
>


-->