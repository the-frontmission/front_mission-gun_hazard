import axios from 'axios'

export default {
  getGame() {
    return axios({
      method: 'GET',
      url: '/api/game.json',
    }).then(response => response.data)
  },
  getCharacters() {
    return axios({
      method: 'GET',
      url: '/api/characters.json',
    }).then(response => response.data)
  },
  getParts() {
    return axios({
      method: 'GET',
      url: '/api/parts.json',
    }).then(response => response.data)
  },
  getScripsList() {
    return axios({
      method: 'GET',
      url: '/api/scripts.json',
    }).then(response => response.data)
  },
  getScriptsChapter({ index }) {
    return axios({
      method: 'GET',
      url: `/api/scripts/${index}.json`,
    }).then(response => response.data)
  },
  getVideos() {
    return axios({
      method: 'GET',
      url: '/api/videos.json',
    }).then(response => response.data)
  },
}
