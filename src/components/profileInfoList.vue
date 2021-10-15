<template>
  <v-list>

    <v-divider inset></v-divider>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo">
          mdi-phone
        </v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ phone }}</v-list-item-title>
      </v-list-item-content>

      <v-list-item-icon>
      </v-list-item-icon>
    </v-list-item>

    <v-divider inset></v-divider>

    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo">
          mdi-email
        </v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ email }}</v-list-item-title>
      </v-list-item-content>
      <v-list-item-icon>
      </v-list-item-icon>
    </v-list-item>

    <v-divider inset></v-divider>


  </v-list>
</template>

<script>
export default {
  name: "profileInfoList",
  props: ['email', 'phone'],
  methods: {
    updateProfile() {

    }
  },
  data() {
    return {newPhone: null}
  }
}
</script>

<style scoped>

</style>