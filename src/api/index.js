import axios from 'axios'

export default {
  getCharacters() {
    return axios({
      method: 'GET',
      url: '/api/characters.json',
    }).then(response => response.data)
  },
  getItems() {
    return axios({
      method: 'GET',
      url: '/api/items.json',
    }).then(response => response.data)
  },
}
