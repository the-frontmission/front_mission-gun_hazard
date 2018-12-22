import {
  REQUEST_DETAIL__SCRIPTS_DETAIL,
  RECEIVE_DETAIL__SCRIPTS_DETAIL,
  FAILURE_DETAIL__SCRIPTS_DETAIL,
} from '@/store/mutation-types'
import api from '@/api'

const state = {
  list: {},
  currentIndex: '',
  status: undefined,
}

const getters = {
  currentScriptDetail: state => state.list[state.currentIndex]
}

const mutations = {
  [REQUEST_DETAIL__SCRIPTS_DETAIL] (state) {
    state.list = {}
    state.currentIndex = '',
    state.status = 'request'
  },
  [RECEIVE_DETAIL__SCRIPTS_DETAIL] (state, { index, script }) {
    state.list[index] = script
    state.currentIndex = index
    state.status = 'receive'
  },
  [FAILURE_DETAIL__SCRIPTS_DETAIL] (state, { error }) {
    state.list = {}
    state.currentIndex = '',
    state.status = error
  },
}

const actions = {
  getScriptsDetail ({ state, commit }, { index }) {
    if (state.list.length) return;

    commit(REQUEST_DETAIL__SCRIPTS_DETAIL)
    api.getScriptsDetail({ index }).then(
      script => commit(RECEIVE_DETAIL__SCRIPTS_DETAIL, { index, script }),
      error => commit(FAILURE_DETAIL__SCRIPTS_DETAIL, { error }),
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
