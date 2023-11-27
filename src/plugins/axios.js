import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmRiOWY2Mzg2MzNlYTA5NWUzYjU3OTUwOWZhN2EwZSIsInN1YiI6IjY0ZmYxNTg5ZmZjOWRlMGVlMjA4OTZmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vtpLz1jJR8ZYFeuY3Ca3LEWsRiloQRvMCHwQQuhH_pQ`
  }
})

export default api