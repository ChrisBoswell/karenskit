<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" class="mx-auto"> -->
  <div v-if="loadAnimation">
    <v-app>
      <v-app-bar density="compact" app color="black" >
        <!-- <router-link  class="w-1/2" active-class="active-link" to="/">
          <img alt="Karen's Kit logo" src="./assets/KarensKit_Logo_Top.jpg" class="w-1/2 float-left">
        </router-link> -->
        <router-link class="w-1/6" to="/">
          <!-- <v-btn></v-btn> -->
          <img alt="Karen's Kit logo" src="./assets/KarensKit_Logo_Top.jpg" class="w-auto float-left">
        </router-link>
        <v-spacer></v-spacer>
        <router-link active-class="active-link" to="/"><v-btn>Home</v-btn></router-link>
        <router-link class="mr-2 px-1" active-class="active-link" to="/products"><v-btn>Products</v-btn></router-link>
        <router-link class="mr-2 px-1" active-class="active-link" to="/booking"><v-btn>Booking</v-btn></router-link>
        <router-link class="mr-2 px-1" active-class="active-link" to="/about-me"><v-btn>About Me</v-btn></router-link>
      </v-app-bar>
      <v-content> 
        <v-container fluid="true">
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
  <div v-if="!loadAnimation">
      <LoadAnimationVue />
  </div>
</template>

<script>
  import { ref, onMounted } from 'vue';
  import LoadAnimationVue from '@/components/LoadAnimation.vue';

  export default {
    name: 'App',
    components: {
      LoadAnimationVue
    },
    setup() {
      const loadAnimation = ref(false)
      
      onMounted(() => {
          setTimeout(() => {
              loadAnimation.value = !loadAnimation.value;
          }, 6000);
      });

      return{
          loadAnimation
      }
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


a.active-link button {
  border: 2px solid white !important;
  border-radius: 0%;
  text-decoration: none !important
}

a button:hover {
  /* text-decoration: underline solid; */
  border-bottom: 2px solid;
  border-radius: 0%;

}
</style>
