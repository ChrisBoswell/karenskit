<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" class="mx-auto"> -->
  <div v-if="loadAnimation">
    <v-app class="pa-0">
      <v-app-bar density="compact" app color="black" >
        <router-link class="xl:w-1/5 lg:w-1/5 w-2/5" to="/">
          <img alt="Karen's Kit logo" src="./assets/KarensKit_Logo_Top.jpg" class="w-auto float-left">
        </router-link>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon class="mr-2 px-1 hidden-md-and-up"  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <router-link class="hidden-sm-and-down" active-class="active-link" to="/"><v-btn>Home</v-btn></router-link>
        <router-link class="mr-2 px-1 hidden-sm-and-down" active-class="active-link" to="/products"><v-btn>Products</v-btn></router-link>
        <router-link class="mr-2 px-1 hidden-sm-and-down" active-class="active-link" to="/booking"><v-btn>Booking</v-btn></router-link>
        <router-link class="mr-2 px-1 hidden-sm-and-down" active-class="active-link" to="/about-me"><v-btn>About Me</v-btn></router-link>
      </v-app-bar>
      <v-navigation-drawer temporary app v-model="drawer" location="right">
        <v-list-item class="bg-dark">
          <router-link active-class="active-link" to="/">Home</router-link>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <router-link class="" active-class="active-link" to="/products">Products</router-link>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <router-link class="" active-class="active-link" to="/booking">Booking</router-link>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <router-link class="" active-class="active-link" to="/about-me">About Me</router-link>
        </v-list-item>
        <v-divider></v-divider>
      </v-navigation-drawer>
      <v-content> 
          <router-view></router-view>
      </v-content>
      <v-footer height="12" class="bg-black mt-40 w-screen">
        <v-row justify="center" no-gutters>
          <a class="border text-light bg-black rounded-lg p-4 cursor-pointer mt-4" href="https://www.instagram.com" target="_blank">
            <v-icon icon="mdi-instagram" />
          </a>
          <a class="border text-light bg-black rounded-lg p-4 cursor-pointer mt-4" href="https://www.facebook.com" target="_blank">
            <v-icon icon="mdi-facebook" />
          </a>
          <a class="border text-light bg-black rounded-lg p-4 cursor-pointer mt-4" href="mailto:someone@example.com">
            <v-icon icon="mdi-email" />
          </a>
          <a class="border text-light bg-black rounded-lg p-4 cursor-pointer mt-4" href="https://www.tiktok.com" target="_blank">
            <v-icon icon="mdi-tiktok"/>
          </a>
        </v-row>
      </v-footer>
    </v-app>
  </div>
  <div v-if="!loadAnimation">
      <LoadAnimationVue />
  </div>
</template>

<script setup>
  
</script>

<script >
  import { ref, onMounted } from 'vue';
  import LoadAnimationVue from '@/components/LoadAnimation.vue';
  // import { Vuetify } from 'vue';
  // import { useDisplay } from 'vuetify'
  // Destructure only the keys you want to use
  // const { mobile } = useDisplay()

  export default {
    name: 'App',
    components: {
      LoadAnimationVue
    },
    data() {
      return {
        drawer: false
      };
    },
    setup() {
      const loadAnimation = ref(false)
      // console.log(this.$vuetify)
      // console.log(mobile)
      onMounted(() => {
         // 960
        // console.log(mobile.value) // true
        setTimeout(() => {
            loadAnimation.value = !loadAnimation.value;
        }, 10);
      });

      return{
          loadAnimation
      }
    },
    computed: {
      
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
