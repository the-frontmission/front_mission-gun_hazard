import {
  REQUEST_CHARACTERS,
  RECEIVE_CHARACTERS,
  FAILURE_CHARACTERS,
} from '@/store/mutation-types'
import api from '@/api'

const state = {
  list: [],
  status: undefined,
}

const getters = {
}

const mutations = {
  [REQUEST_CHARACTERS] (state) {
    state.list = []
    state.status = 'request'
  },
  [RECEIVE_CHARACTERS] (state, { characters }) {
    state.list = [...characters]
    state.status = 'receive'
  },
  [FAILURE_CHARACTERS] (state, { error }) {
    state.list = []
    state.status = error
  },
}

const actions = {
  getCharacters ({ state, commit }) {
    if (state.list.length) return;

    commit(REQUEST_CHARACTERS)
    api.getCharacters().then(
      characters => commit(RECEIVE_CHARACTERS, { characters }),
      error => commit(FAILURE_CHARACTERS, { error }),
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
