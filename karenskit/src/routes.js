import Home from './views/home.vue'
import AboutMe from './views/about-me.vue'
import Booking from './views/booking.vue'
import Products from './views/products.vue'

import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about-me', component: AboutMe },
    { path: '/booking', component: Booking },
    { path: '/products', component: Products },
  ],
})


export default router;