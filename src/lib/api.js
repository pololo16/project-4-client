import axios from 'axios'


// import { getToken } from './auth'

const baseUrl = '/api'

// function headers() {
//   return {
//     headers: { Authorization: `Bearer ${getToken()}` },
//   }
// }

export function getAllFlights() {
  return axios.get(`${baseUrl}/flights`)
}

