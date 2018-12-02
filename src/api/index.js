import axios from 'axios'

export default {
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
}
