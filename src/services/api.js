import axios from 'axios'

const apiDevBurger = axios.create({
  baseURL: 'https://codeburger-backend.onrender.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

apiDevBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('devburger:userData')
  const token = userData && JSON.parse(userData).token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default apiDevBurger
