import axios from "axios"

export const getNews = () =>  
axios.get('http://localhost:59755/api/News');