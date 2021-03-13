import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Young from '../views/Young.vue';
import Medium from '../views/Medium.vue';
import Old from '../views/Old.vue'


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/young",
    name: "Young",
    component: Young
  },
  {
    path: "/medium",
    name: "Medium",
    component: Medium
  },
  {
    path: "/old",
    name: "Old",
    component: Old
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router