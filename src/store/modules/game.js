import {
  REQUEST_LIST__GAME,
  RECEIVE_LIST__GAME,
  FAILURE_LIST__GAME,
} from '@/store/mutation-types'
import api from '@/api'

const state = {
  about: {},
  status: undefined,
}

const getters = {
}

const mutations = {
  [REQUEST_LIST__GAME] (state) {
    state.about = {}
    state.status = 'request'
  },
  [RECEIVE_LIST__GAME] (state, { about }) {
    state.about = about
    state.status = 'receive'
  },
  [FAILURE_LIST__GAME] (state, { error }) {
    state.about = {}
    state.status = error
  },
}

const actions = {
  getGame ({ state, commit }) {
    if (Object.keys(state.about).length) return;

    commit(REQUEST_LIST__GAME)
    api.getGame().then(
      about => commit(RECEIVE_LIST__GAME, { about }),
      error => commit(FAILURE_LIST__GAME, { error }),
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
