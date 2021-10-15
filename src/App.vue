<template>

  <v-app id="inspire">
    <div id="nav">
      <v-navigation-drawer
          v-model="drawer"
          app
          clipped
          class="primary"
      >
        <v-container>


          <v-row>
            <v-col>
              <v-divider></v-divider>
            </v-col>
          </v-row>


          <div v-for="item in menu" :key="item.title">

            <v-row>
              <v-col cols="4" align="end">
                <v-icon>{{ item.icon }}</v-icon>
              </v-col>
              <v-col align="start">
                <router-link :to=item.rout id="sideBarIcon">{{ item.title }}</router-link>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-divider></v-divider>
              </v-col>
            </v-row>
          </div>

        </v-container>

      </v-navigation-drawer>
    </div>

    <v-app-bar app
               clipped-left
               class="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-container fluid>
        <v-row justify="space-between">
          <v-col align="left" align-self="center">
            <v-toolbar-title>TrainMe</v-toolbar-title>
          </v-col>
          <v-col align="right" align-self="end">
            <router-link to="/profile" style="text-decoration: none;">

            <v-toolbar-title class="black--text" v-if="$store.state.security.isLoggedIn">
              <span id="profile">
                <v-icon x-large>person</v-icon>
                {{ $store.state.security.username }}
              </span>
            </v-toolbar-title>
            </router-link>
          </v-col>
          <v-col align="right" align-self="center" cols="1" v-if="!$store.state.security.isLoggedIn">
            <router-link style="text-decoration: none;" to="/login">
              <v-btn rounded large>LOG IN</v-btn>
            </router-link>
          </v-col>
          <v-col align="right" align-self="center" cols="1" v-if="!$store.state.security.isLoggedIn">
            <router-link style="text-decoration: none;" to="/signin">
              <v-btn class="accent white--text" rounded large>SIGN UP</v-btn>
            </router-link>
          </v-col>
          <v-col align="right" align-self="center" cols="2" v-else>
            <logout-btn/>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main id="main-content">
      <router-view :key="$route.path"/>
    </v-main>
  </v-app>
</template>

<script>

import LogoutBtn from "./components/logoutBtn";

export default {
  name: 'App',

  components: {LogoutBtn},
  data: () => ({
    drawer: null,
    menu: [
      {
        rout: "/explore",
        title: "Explore",
        icon: "explore"
      },
      {
        rout: "/favorites",
        title: "Favorites",
        icon: "mdi-heart"
      },
      {
        rout: "/MyRoutines",
        title: "MyRoutines",
        icon: "fitness_center"
      },
      {
        rout: "/help",
        title: "Help",
        icon: "help"
      }]
  }),
  /*methods:{
    logout(){
      security.actions.logout()
    }
  }*/

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  background-color: #E0F2F1;
}

#main-content {
  background-color: #E0F2F1;
}

#sideBarIcon {
  font-size: large;
  color: black;
  alignment: center;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: white;
}

#sideBarIcon:hover {
  font-size: large;
  color: white;
  alignment: center;
  text-decoration: blink underline;
  font-weight: bold;
}

#profile {
  font-size: x-large;
  color: black;
  alignment: center;
  text-decoration: none;
}

#profile:hover {
  font-size: x-large;
  color: white;
  alignment: center;
  text-decoration: blink underline;
  font-weight: bold;
}

</style>
