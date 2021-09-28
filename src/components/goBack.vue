<template>
<span class="goBack">
  <v-btn @click="goBack">Go back</v-btn>
</span>
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