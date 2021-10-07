<template>
<v-card>
  <v-avatar size="60%">
    <v-img :src="user.avatarUrl"/>
  </v-avatar>
  <h1>{{user.username + " " + user.firstName + " " + user.lastName}}</h1>
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