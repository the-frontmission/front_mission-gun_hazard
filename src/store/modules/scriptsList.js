import {
  REQUEST_LIST__SCRIPTS_LIST,
  RECEIVE_LIST__SCRIPTS_LIST,
  FAILURE_LIST__SCRIPTS_LIST,
} from '@/store/mutation-types'
import api from '@/api'

const state = {
  list: [],
  status: undefined,
}

const getters = {
}

const mutations = {
  [REQUEST_LIST__SCRIPTS_LIST] (state) {
    state.list = []
    state.status = 'request'
  },
  [RECEIVE_LIST__SCRIPTS_LIST] (state, { scripts }) {
    state.list = [...scripts]
    state.status = 'receive'
  },
  [FAILURE_LIST__SCRIPTS_LIST] (state, { error }) {
    state.list = []
    state.status = error
  },
}

const actions = {
  getScriptsList ({ state, commit }) {
    if (state.list.length) return;

    commit(REQUEST_LIST__SCRIPTS_LIST)
    api.getScripsList().then(
      scripts => commit(RECEIVE_LIST__SCRIPTS_LIST, { scripts }),
      error => commit(FAILURE_LIST__SCRIPTS_LIST, { error }),
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
