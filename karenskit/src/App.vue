<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" class="mx-auto"> -->
  <v-app>
    <v-app-bar density="compact" app color="black">
      <!-- <v-app-bar-nav-icon><img alt="Vue logo" src="../assets/logo.png" class="mx-auto"></v-app-bar-nav-icon> -->
      <v-app-bar-nav-icon><router-link to="/">K</router-link></v-app-bar-nav-icon>
      <!-- <v-toolbar-title>Karen's Kit</v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-btn><router-link to="/booking">Booking</router-link></v-btn>
      <v-btn><router-link to="/products">Products</router-link></v-btn>
      <v-btn><router-link to="/about-me">About Me</router-link></v-btn>
      <v-btn><router-link to="/">Home</router-link></v-btn>
    </v-app-bar>
    <v-content> 
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
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
