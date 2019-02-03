import {
  REQUEST_LIST__PARTS,
  RECEIVE_LIST__PARTS,
  FAILURE_LIST__PARTS,
} from '@/store/mutation-types';
import api from '@/api';
import { parseParts } from '../utils';

const state = {
  list: [],
  status: undefined,
};

const getters = {
};

const mutations = {
  [REQUEST_LIST__PARTS] (state) {
    state.list = [];
    state.status = 'request';
  },
  [RECEIVE_LIST__PARTS] (state, { parts }) {
    state.list = parseParts(parts);
    state.status = 'receive';
  },
  [FAILURE_LIST__PARTS] (state, { error }) {
    state.list = [];
    state.status = error;
  },
};

const actions = {
  getParts ({ state, commit }) {
    if (state.list.length) return;

    commit(REQUEST_LIST__PARTS);
    api.getParts().then(
      parts => commit(RECEIVE_LIST__PARTS, { parts }),
      error => commit(FAILURE_LIST__PARTS, { error }),
    );
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
