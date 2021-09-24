<template>

  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
        color="blue lighten-1"
    >

      <v-list
          dense
          nav
          two-line>
        <v-list-item>
          <v-list-item-content>

            <v-list-item-title>
              <v-icon>explore</v-icon>
              <router-link to="/explore">Explore</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <v-icon>star</v-icon>
              <router-link to="/favorites">Favorites</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <v-icon>person</v-icon>
              <router-link to="/profile">Profile</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <v-icon>fitness_center</v-icon>
              <router-link to="/MyRoutines">MyRoutines</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>


      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app
    color="blue lighten-4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-container>
        <v-row justify="space-between">
          <v-col align="start" align-self="center">
            <v-toolbar-title>TrainMe</v-toolbar-title>
          </v-col>

          <v-col align="end" align-self="center">
            <v-btn
                fab
                text

            ><v-icon size="35px">search</v-icon>
            </v-btn>

          </v-col>



        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view/>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({ drawer: null }),

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}




</style>
