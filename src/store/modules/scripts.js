import {
  REQUEST_LIST__SCRIPTS,
  RECEIVE_LIST__SCRIPTS,
  FAILURE_LIST__SCRIPTS,
  REQUEST_CHAPTER__SCRIPTS,
  RECEIVE_CHAPTER__SCRIPTS,
  FAILURE_CHAPTER__SCRIPTS,
  SELECT_CHAPTER__SCRIPTS,
} from '@/store/mutation-types'
import api from '@/api'

const state = {
  list: [
    // {
    //   section: '프롤로그',
    //   chapters: [
    //     {
    //       chapter: '프롤로그',
    //       date: '2018.05.08',
    //       sequence: 1,
    //     },
    //   ],
    // },
  ],
  map: {},
  currentIndex: '',
  status: undefined,
}

const getters = {
  currentChapter: state => state.map[state.currentIndex]
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
  [REQUEST_CHAPTER__SCRIPTS] (state, { index }) {
    state.map = { ...state.map, [index]: {} }
  },
  [RECEIVE_CHAPTER__SCRIPTS] (state, { index, content }) {
    state.list.find(section => {
      console.log(section.section)
      const chapter = section.chapters.find(ch => ch.sequence === parseInt(index, 10))
      if (chapter) {
        chapter.isLoaded = true
        return true
      }
    })
    state.map = { ...state.map, [index]: content }
  },
  [FAILURE_CHAPTER__SCRIPTS] (state, { error }) {
    state.status = error
  },
  [SELECT_CHAPTER__SCRIPTS] (state, { index }) {
    state.currentIndex = index
  },
}

const actions = {
  getScriptsList ({ state, commit }) {
    if (state.list.length) return

    commit(REQUEST_LIST__SCRIPTS)
    api.getScripsList().then(
      scripts => commit(RECEIVE_LIST__SCRIPTS, { scripts }),
      error => commit(FAILURE_LIST__SCRIPTS, { error }),
    )
  },
  getScriptsChapter ({ dispatch, state, commit }, { index }) {
    return dispatch('getScriptsList').then(() => {
      commit(SELECT_CHAPTER__SCRIPTS, { index })
      if (state.map.hasOwnProperty(index)) return

      commit(REQUEST_CHAPTER__SCRIPTS, { index })
      api.getScriptsChapter({ index }).then(
        content => commit(RECEIVE_CHAPTER__SCRIPTS, { index, content }),
        error => commit(FAILURE_CHAPTER__SCRIPTS, { error }),
      )
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
