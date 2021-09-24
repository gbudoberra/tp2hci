<template>

  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
        class="primary"
    >
      <v-list
          dense
          nav
          two-line >
        <v-list-item>
          <v-list-item-content>

            <v-list-item-title>
              <v-icon>explore</v-icon>
              <router-link to="/explore" id="sideBarIcon">Explore</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <v-icon>star</v-icon>
              <router-link to="/favorites" id="sideBarIcon">Favorites</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <v-icon>person</v-icon>
              <router-link to="/profile" id="sideBarIcon">Profile</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <v-icon>fitness_center</v-icon>
              <router-link to="/MyRoutines" id="sideBarIcon">MyRoutines</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>


      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app
    class="secondary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-container>
        <v-row justify="space-between">
          <v-col align="left" align-self="center">
            <v-toolbar-title>TrainMe</v-toolbar-title>
          </v-col>

          <v-col align="right" align-self="center">
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
  margin-top: 60px;
}

#sideBarIcon {
  font-size: large;
  color: aliceblue;
  alignment: center;
  text-decoration: none;
}

#sideBarIconSelected {
  font-size: large;
  color: #19ff47;
  alignment: center;
  text-decoration: none;
}


</style>
