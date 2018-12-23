import {
  REQUEST_LIST__VIDEOS,
  RECEIVE_LIST__VIDEOS,
  FAILURE_LIST__VIDEOS,
  SELECT_INDEX__VIDEOS,
} from '@/store/mutation-types'
import api from '@/api'

const state = {
  list: [],
  currentVideoUid: undefined,
  status: undefined,
}

const getters = {
  currentVideo: state => state.list.find(video => video.uid === state.currentVideoUid)
}

const mutations = {
  [REQUEST_LIST__VIDEOS] (state) {
    state.list = []
    state.status = 'request'
  },
  [RECEIVE_LIST__VIDEOS] (state, { videos }) {
    state.list = [...videos]
    state.currentVideoUid = state.list[0].uid
    state.status = 'receive'
  },
  [FAILURE_LIST__VIDEOS] (state, { error }) {
    state.list = []
    state.status = error
  },
  [SELECT_INDEX__VIDEOS] (state, { uid }) {
    state.currentVideoUid = uid
  },
}

const actions = {
  getVideos ({ state, commit }) {
    if (state.list.length) return

    commit(REQUEST_LIST__VIDEOS)
    api.getVideos().then(
      videos => commit(RECEIVE_LIST__VIDEOS, { videos }),
      error => commit(FAILURE_LIST__VIDEOS, { error }),
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
