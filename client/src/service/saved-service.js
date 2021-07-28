import axios from 'axios'
import {toggleButtons} from "./../middleware/toggleButtons"

const savedService = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/savedArticles`,
    withCredentials: true
})

export function saveArticle(article){
    toggleButtons();
    return savedService.put('/', article)
    .then(response => response.data)
}

export function deleteArticle(article){
    toggleButtons();
    return savedService.put(`/${article.web_url}`)
    .then(res => res.data)
    .catch(err=>console.log(err))
}


