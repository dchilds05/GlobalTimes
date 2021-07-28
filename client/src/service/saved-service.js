import axios from 'axios'
import {toggleButtons} from "./../middleware/toggleButtons"

const savedService = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/savedArticles`,
    withCredentials: true
})

export function saveArticle(article){
    console.log("save article clicked")
    toggleButtons();
    return savedService.put('/', article)
    .then(response => response.data)
}

export function deleteArticle(web_url){
    console.log("delete article clicked")
    toggleButtons();
    return savedService.put(`/removeFavorite`, {web_url})
    .then(res => res.data)
    .catch(err=>console.log(err))
}


