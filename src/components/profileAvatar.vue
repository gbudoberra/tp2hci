<template>
<v-card>
  <v-avatar size="100%">
    <v-img :src="user.pic"/>
  </v-avatar>
  <h1>{{user.name + ' ' + user.surname}}</h1>
</v-card>
</template>

<script>
export default {
  name: "profileAvatar",
  props: ['user']
}
</script>

<style scoped>

</style>