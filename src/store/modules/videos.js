import {
  REQUEST_PARTS,
  RECEIVE_PARTS,
  FAILURE_PARTS,
} from '@/store/mutation-types'
import api from '@/api'

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
  [RECEIVE_PARTS] (state, { videos }) {
    state.list = [...videos]
    state.status = 'receive'
  },
  [FAILURE_PARTS] (state, { error }) {
    state.list = []
    state.status = error
  },
}

const actions = {
  getVideos ({ state, commit }) {
    if (state.list.length) return;

    commit(REQUEST_PARTS)
    api.getVideos().then(
      videos => commit(RECEIVE_PARTS, { videos }),
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
