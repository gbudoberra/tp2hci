<template>
  <div id="app">
    <div id="nav">
      <router-link to="/explore">Explore</router-link> |
      <router-link to="/favorites">Favorites</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/MyRoutines">MyRoutines</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
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
