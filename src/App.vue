<template>

  <v-app id="inspire">
    <div id="nav">
    <v-navigation-drawer
        v-model="drawer"
        app
        class="primary"
    >
      <v-container>

        <v-row><v-col><v-divider></v-divider></v-col></v-row>

        <v-row justify="space-around">
          <v-col align-self="center" align="center"><v-icon>explore</v-icon></v-col>
          <v-col align-self="center" align="start"><router-link to="/explore"  id="sideBarIcon">Explore</router-link></v-col>
          <v-col></v-col>
        </v-row>


        <v-row><v-col><v-divider></v-divider></v-col></v-row>





        <v-row justify="space-around">
          <v-col align-self="center" align="center"><v-icon>star</v-icon></v-col>
          <v-col align-self="center" align="start"><router-link to="/favorites" id="sideBarIcon">Favorites</router-link></v-col>
          <v-col></v-col>
        </v-row>

        <v-row><v-col><v-divider></v-divider></v-col></v-row>


        <v-row justify="space-around">
          <v-col align-self="center" align="center"><v-icon>person</v-icon></v-col>
          <v-col align-self="center" align="start"><router-link to="/profile" id="sideBarIcon">Profile</router-link></v-col>
          <v-col></v-col>
        </v-row>

        <v-row><v-col><v-divider></v-divider></v-col></v-row>


        <v-row justify="space-around">
          <v-col align-self="center" align="center"><v-icon>fitness_center</v-icon></v-col>
          <v-col align-self="center" align="start"><router-link to="/MyRoutines" id="sideBarIcon">MyRoutines</router-link></v-col>
          <v-col></v-col>
        </v-row>

        <v-row><v-col><v-divider></v-divider></v-col></v-row>


        <v-row justify="space-around" align-content-lg="end">
                <v-col align-self="center" align="center"><v-icon>settings</v-icon></v-col>
          <v-col align-self="center" align="start"><router-link to="/settings" id="sideBarIcon">Settings</router-link></v-col>
                <v-col></v-col>
        </v-row>

        <v-row><v-col><v-divider></v-divider></v-col></v-row>
      </v-container>

    </v-navigation-drawer>
      </div>

    <v-app-bar app
    class="secondary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-container fluid>
        <v-row justify="space-between">
          <v-col align="left" align-self="center">
            <v-toolbar-title>TrainMe</v-toolbar-title>
          </v-col>
          <v-col align="right" align-self="end">
            <v-toolbar-title v-if="$store.state.security.isLoggedIn">{{$store.state.security.username}}</v-toolbar-title>
          </v-col>
          <v-col align="right" align-self="center" cols="1" v-if="!$store.state.security.isLoggedIn">
              <router-link to="/login">
                <v-btn outlined rounded x-large plain><v-icon large>login</v-icon></v-btn>
              </router-link>
          </v-col>
          <v-col align="right" align-self="center" cols="1" v-else>
            <logout-btn/>
          </v-col>

        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
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
    drawer: null
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
}

#sideBarIcon {
  font-size: large;
  color: white;
  alignment: center;
  text-decoration: none;
}



#nav a.router-link-exact-active {
  color: lightskyblue;
}
#sideBarIcon:hover{
  font-size: large;
  color: lightskyblue;
  alignment: center;
  text-decoration: blink underline;
  font-weight: bold;
}




</style>
