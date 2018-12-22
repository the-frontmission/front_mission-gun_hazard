import Vue from 'vue'
import Vuex from 'vuex'
import game from './modules/game'
import characters from './modules/characters'
import parts from './modules/parts'
import scriptsList from './modules/scriptsList'
import scriptsDetail from './modules/scriptsDetail'
import videos from './modules/videos'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    game,
    characters,
    parts,
    scriptsList,
    scriptsDetail,
    videos,
  },
})
