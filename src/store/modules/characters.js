import {
  REQUEST_LIST__CHARACTERS,
  RECEIVE_LIST__CHARACTERS,
  FAILURE_LIST__CHARACTERS,
} from '@/store/mutation-types';
import api from '@/api';

const state = {
  list: [],
  status: undefined,
};

const getters = {
};

const mutations = {
  [REQUEST_LIST__CHARACTERS] (state) {
    state.list = [];
    state.status = 'request';
  },
  [RECEIVE_LIST__CHARACTERS] (state, { characters }) {
    state.list = [...characters];
    state.status = 'receive';
  },
  [FAILURE_LIST__CHARACTERS] (state, { error }) {
    state.list = [];
    state.status = error;
  },
};

const actions = {
  getCharacters ({ state, commit }) {
    if (state.list.length) return;

    commit(REQUEST_LIST__CHARACTERS);
    api.getCharacters().then(
      characters => commit(RECEIVE_LIST__CHARACTERS, { characters }),
      error => commit(FAILURE_LIST__CHARACTERS, { error }),
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
