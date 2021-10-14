<template>
  <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      color="deep-purple accent-4"
  ></v-progress-linear>
</template>

<script>
export default {
  name: "loadingBar",
  props: ['loading']
}
</script>

<style scoped>

</style>