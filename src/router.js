import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/HomeView.vue'
import GameView from './views/GameView.vue'
import CharactersView from './views/CharactersView.vue'
import PartsView from './views/PartsView.vue'
import ScriptsListView from './views/ScriptsListView.vue'
import ScriptsChapterView from './views/ScriptsChapterView.vue'
import VideosView from './views/VideosView.vue'

Vue.use(Router)

const routes = [
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
    component: ScriptsListView,
  },
  {
    path: '/scripts/:index',
    component: ScriptsChapterView,
  },
  {
    path: '/videos',
    name: 'videos',
    component: VideosView,
  },
]

export { routes }
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
})
