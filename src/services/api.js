import axios from 'axios'

const api = axios.create({
    baseURL: 'https://proexe-c55c.restdb.io/rest',
    timeout: 15000,
    headers: {
        'cache-control': 'no-cache',
        'Content-Type': 'application/json',
        'x-apikey': '61f61c1d7007f935b7743782'
    }
})

export default api