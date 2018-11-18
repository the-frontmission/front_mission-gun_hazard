import Vue from 'vue'
import Vuex from 'vuex'
import characters from './modules/characters'
import items from './modules/items'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    characters,
    items,
  },
})
