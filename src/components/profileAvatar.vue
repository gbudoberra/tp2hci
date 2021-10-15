<template>
  <v-card class="pt-5">
    <v-avatar size="50%">
      <v-img :src="user.avatarUrl"/>
    </v-avatar>
    <h1>{{ user.firstName + " " + user.lastName }}</h1>
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