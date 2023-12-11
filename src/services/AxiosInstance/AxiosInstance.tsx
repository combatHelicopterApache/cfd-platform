import axios from 'axios'

import moment from 'moment-timezone'

import { getValueFromLS, setValueToLS } from 'shared/hooks/useLocalStorage'

const axiosInstance = (() => {
  const params = {}
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-timezone': moment.tz.guess(),
  }

  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    params,
    headers,
  })
})()

axiosInstance.interceptors.request.use(
  config => {
    const token = getValueFromLS('token')

    if (token) config.headers.Authorization = `Bearer ${token}`

    return config
  },
  error => Promise.reject(error),
)
axiosInstance.interceptors.response.use(
  data => data,
  error => {
    if (error.response?.status === 401) {
      setValueToLS('token', {})
      window.location.href = '/login'
    }

    return Promise.reject(error)
  },
)

export default axiosInstance
