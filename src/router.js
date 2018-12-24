import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/HomeView.vue'
import GameView from './views/GameView.vue'
import CharactersView from './views/CharactersView.vue'
import PartsView from './views/PartsView.vue'
import ScriptsView from './views/ScriptsView.vue'
import ScriptsListView from './views/ScriptsListView.vue'
import ScriptsChapterView from './views/ScriptsChapterView.vue'
import VideosView from './views/VideosView.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    label: 'home',
    component: HomeView,
  },
  {
    path: '/game',
    label: 'game',
    component: GameView,
  },
  {
    path: '/characters',
    label: 'characters',
    component: CharactersView,
  },
  {
    path: '/parts',
    label: 'parts',
    component: PartsView,
  },
  {
    path: '/scripts',
    label: 'scripts',
    component: ScriptsView,
    children: [
      {
        path: '',
        name: 'scriptsList',
        component: ScriptsListView,
      },
      {
        path: ':index',
        name: 'scriptsChapter',
        component: ScriptsChapterView,
      }
    ]
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
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})
