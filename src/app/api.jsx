import axios from "axios";

const api = axios.create({
    baseURL: 'https://quran.roidev.my.id/',
    responseType: 'json',
})

export default api