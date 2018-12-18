import {
  REQUEST_LIST__SCRIPTS,
  RECEIVE_LIST__SCRIPTS,
  FAILURE_LIST__SCRIPTS,
} from '@/store/mutation-types'
import api from '@/api'

const state = {
  list: [],
  status: undefined,
}

const getters = {
}

const mutations = {
  [REQUEST_LIST__SCRIPTS] (state) {
    state.list = []
    state.status = 'request'
  },
  [RECEIVE_LIST__SCRIPTS] (state, { scripts }) {
    state.list = [...scripts]
    state.status = 'receive'
  },
  [FAILURE_LIST__SCRIPTS] (state, { error }) {
    state.list = []
    state.status = error
  },
}

const actions = {
  getScripts ({ state, commit }) {
    if (state.list.length) return;

    commit(REQUEST_LIST__SCRIPTS)
    api.getScrips().then(
      scripts => commit(RECEIVE_LIST__SCRIPTS, { scripts }),
      error => commit(FAILURE_LIST__SCRIPTS, { error }),
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
