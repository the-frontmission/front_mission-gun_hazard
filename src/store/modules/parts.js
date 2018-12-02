import {
  REQUEST_PARTS,
  RECEIVE_PARTS,
  FAILURE_PARTS,
} from '@/store/mutation-types'
import api from '@/api'
import { parseParts } from '../utils'

const state = {
  list: [],
  status: undefined,
}

const getters = {
}

const mutations = {
  [REQUEST_PARTS] (state) {
    state.list = []
    state.status = 'request'
  },
  [RECEIVE_PARTS] (state, { characters }) {
    state.list = parseParts(characters)
    state.status = 'receive'
  },
  [FAILURE_PARTS] (state, { error }) {
    state.list = []
    state.status = error
  },
}

const actions = {
  getParts ({ state, commit }) {
    if (state.list.length) return;

    commit(REQUEST_PARTS)
    api.getParts().then(
      characters => commit(RECEIVE_PARTS, { characters }),
      error => commit(FAILURE_PARTS, { error }),
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
