import axios from 'axios'


import { getToken } from './auth'

const baseUrl = '/api'

// function headers() {
//   return {
//     headers: { Authorization: `Bearer ${getToken()}` },
//   }
// }

export function getAllFlights() {
  return axios.get(`${baseUrl}/flights`)
}

export function registerUser(formdata) {
  return axios.post(`${baseUrl}/register/`, formdata)
}

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/login/`, formdata)
}
