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
          <v-list
              shaped>

            <v-list-item
                v-for="item in menu"
                :key="item.title"
                link
                :to=item.rout

            >
              <v-list-item-content>

                <v-container>
                  <v-row>
                    <v-col cols="3" align="end" align-self="center">
                      <v-icon color="black">{{ item.icon }}</v-icon>
                    </v-col>
                    <v-col align="start" align-self="center">
                      <v-list-item-title class="text-h6">{{ item.title }}</v-list-item-title>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-divider></v-divider>
                  </v-row>
                </v-container>

              </v-list-item-content>
            </v-list-item>
          </v-list>

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
            <v-toolbar-title class="text-h4">TrainMe</v-toolbar-title>
          </v-col>
          <v-col align="right" align-self="center" v-if="$store.state.security.isLoggedIn">
            <v-btn to="/profile" plain id="profile" rounded large :$btn-text-transform=false>
              <v-icon x-large>person</v-icon>
              {{ $store.state.security.username }}

            </v-btn>

          </v-col>
          <v-col align="right" align-self="center" cols="2" v-if="!$store.state.security.isLoggedIn">

            <login-btn/>

          </v-col>
          <v-col align="center" align-self="center" cols="2" v-if="!$store.state.security.isLoggedIn">

            <sign-up-btn/>

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
import SignUpBtn from "./components/signUpBtn";
import LoginBtn from "./components/loginBtn";

export default {
  name: 'App',

  components: {LoginBtn, SignUpBtn, LogoutBtn},
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

}
</script>

<style>

#main-content {
  background-color: #FFFFFF;
}



#profile {
  font-size: large;
  color: black;
  alignment: center;
  text-decoration: none;

}

#profile:hover {
  font-size: large;
  color: white;
  alignment: center;
  text-decoration: blink;
  font-weight: bold;
}

</style>
