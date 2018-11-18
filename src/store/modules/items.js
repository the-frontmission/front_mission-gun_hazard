import {
  REQUEST_ITEMS,
  RECEIVE_ITEMS,
  FAILURE_ITEMS,
} from '@/store/mutation-types'
import api from '@/api'
import { parseItems } from '../utils'

const state = {
  list: [],
  status: undefined,
}

const getters = {
}

const mutations = {
  [REQUEST_ITEMS] (state) {
    state.list = []
    state.status = 'request'
  },
  [RECEIVE_ITEMS] (state, { characters }) {
    state.list = parseItems(characters)
    state.status = 'receive'
  },
  [FAILURE_ITEMS] (state, { error }) {
    state.list = []
    state.status = error
  },
}

const actions = {
  getItems ({ state, commit }) {
    if (state.list.length) return;

    commit(REQUEST_ITEMS)
    api.getItems().then(
      characters => commit(RECEIVE_ITEMS, { characters }),
      error => commit(FAILURE_ITEMS, { error }),
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
