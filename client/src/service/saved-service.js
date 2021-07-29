import axios from 'axios'
import {toggleButtons} from "./../middleware/toggleButtons"

const savedService = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/savedArticles`,
    withCredentials: true
})

export function saveArticle(article){
    console.log("save article clicked")
    toggleButtons(article.web_url);
    return savedService.put('/', {abstract: article.abstract, headline: article.headline.main, multimedia: article.multimedia[0].url, pub_date: article.pub_date, section_name: article.section_name, web_url: article.web_url})
    .then(response => response.data)
}

export function deleteArticle(article){
    console.log("delete article clicked")
    toggleButtons(article.web_url);
    return savedService.put(`/removeFavorite`, {web_url: article.web_url})
    .then(res => res.data)
    .catch(err=>console.log(err))
}


