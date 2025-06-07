import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
// import LoginView from '../views/Login.vue'
// import GameView from '../views/gameView.vue'
// import LeaderBoard from '../views/leaderboardView.vue'


export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ]
})