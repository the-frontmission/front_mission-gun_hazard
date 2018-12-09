import {
  REQUEST_VIDEOS,
  RECEIVE_VIDEOS,
  FAILURE_VIDEOS,
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
  [REQUEST_VIDEOS] (state) {
    state.list = []
    state.status = 'request'
  },
  [RECEIVE_VIDEOS] (state, { parts }) {
    state.list = parseParts(parts)
    state.status = 'receive'
  },
  [FAILURE_VIDEOS] (state, { error }) {
    state.list = []
    state.status = error
  },
}

const actions = {
  getParts ({ state, commit }) {
    if (state.list.length) return;

    commit(REQUEST_VIDEOS)
    api.getParts().then(
      parts => commit(RECEIVE_VIDEOS, { parts }),
      error => commit(FAILURE_VIDEOS, { error }),
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
