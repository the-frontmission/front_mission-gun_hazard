import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/HomeView.vue'
import GameView from './views/GameView.vue'
import CharactersView from './views/CharactersView.vue'
import PartsView from './views/PartsView.vue'
import ScriptsView from './views/ScriptsView.vue'
import VideosView from './views/VideosView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/game',
      name: 'game',
      component: GameView,
    },
    {
      path: '/characters',
      name: 'characters',
      component: CharactersView,
    },
    {
      path: '/parts',
      name: 'parts',
      component: PartsView,
    },
    {
      path: '/scripts',
      name: 'scripts',
      component: ScriptsView,
    },
    {
      path: '/videos',
      name: 'videos',
      component: VideosView,
    },
  ],
})
