import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/HomeView.vue'

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
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/AboutView.vue'),
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
