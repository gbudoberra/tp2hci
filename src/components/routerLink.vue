<template>
  <v-row justify="space-around">
    <v-col align-self="center" align="center">
      <v-icon>
        <slot name="icon"/>
      </v-icon>
    </v-col>
    <v-col align-self="center" align="start">
      <router-link id="sideBarIcon">
        <slot name="title"/>
      </router-link>
    </v-col>
    <v-col></v-col>
  </v-row>
</template>

<script>

export default {
  name: "routerLink",
}
</script>

<style scoped>
#sideBarIcon {
  font-size: large;
  color: white;
  alignment: center;
  text-decoration: none;
}


#nav a.router-link-exact-active {
  color: lightskyblue;
}

#sideBarIcon:hover {
  font-size: large;
  color: lightskyblue;
  alignment: center;
  text-decoration: blink underline;
  font-weight: bold;
}
</style>