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
    label: 'Home',
    component: HomeView,
  },
  {
    path: '/game',
    label: 'Game',
    component: GameView,
  },
  {
    path: '/characters',
    label: 'Characters',
    component: CharactersView,
  },
  {
    path: '/parts',
    label: 'Parts',
    component: PartsView,
  },
  {
    path: '/scripts',
    label: 'Scripts',
    component: ScriptsListView,
  },
  {
    path: '/scripts/:index',
    name: 'scriptsChapter',
    component: ScriptsChapterView,
  },
  {
    path: '/videos',
    label: 'videos',
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
