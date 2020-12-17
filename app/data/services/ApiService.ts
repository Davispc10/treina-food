import axios from 'axios'
const api = 'http://192.168.0.108:3002/api/treinafood/'

export const ApiService = {
  async get (endpoint: string) {
    const result = await axios.get(`${api}${endpoint}`)
    return result.data
  },

  async post (endpoint: string, data: any) {
    const result = await axios.post(`${api}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    return result.data
  }
}
