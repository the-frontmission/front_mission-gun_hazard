import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'

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
      path: '/about',
      // component: () => import(/* webpackChunkName: "about" */ './views/AboutView.vue'),
      component: AboutView,
      children: [
        {
          path: '',
          redirect: { name: 'game' },
        },
        {
          path: 'game',
          name: 'game',
          component: () => import(/* webpackChunkName: "game" */ './views/AboutGame.vue'),
        },
        {
          path: 'characters',
          name: 'characters',
          component: () => import(/* webpackChunkName: "characters" */ './views/AboutCharacters.vue'),
        },
        {
          path: 'items',
          name: 'items',
          component: () => import(/* webpackChunkName: "items" */ './views/AboutItems.vue'),
        },
      ],
    },
    {
      path: '/scripts',
      name: 'scripts',
      component: () => import(/* webpackChunkName: "scripts" */ './views/ScriptsView.vue'),
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import(/* webpackChunkName: "videos" */ './views/VideosView.vue'),
    },
  ],
})
