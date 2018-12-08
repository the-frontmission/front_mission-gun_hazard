import {
  REQUEST_GAME,
  RECEIVE_GAME,
  FAILURE_GAME,
} from '@/store/mutation-types'
import api from '@/api'

const state = {
  about: {},
  status: undefined,
}

const getters = {
}

const mutations = {
  [REQUEST_GAME] (state) {
    state.about = {}
    state.status = 'request'
  },
  [RECEIVE_GAME] (state, { about }) {
    state.about = about
    state.status = 'receive'
  },
  [FAILURE_GAME] (state, { error }) {
    state.about = {}
    state.status = error
  },
}

const actions = {
  getGame ({ state, commit }) {
    if (Object.keys(state.about).length) return;

    commit(REQUEST_GAME)
    api.getGame().then(
      about => commit(RECEIVE_GAME, { about }),
      error => commit(FAILURE_GAME, { error }),
    )
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
