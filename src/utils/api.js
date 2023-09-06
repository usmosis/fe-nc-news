import axios from "axios"

export const getArticles = () => {
    return axios.get("https://usmosis-be-nc-news.onrender.com/api/articles/")
}
export const getArticleById =(article_id) => {
    return axios.get(`https://usmosis-be-nc-news.onrender.com/api/articles/${article_id}/`)

}

export const getComments =(article_id) => {
    return axios.get(`https://usmosis-be-nc-news.onrender.com/api/articles/${article_id}/comments`)

}

export const increaseVotes = (article_id) => {
    return axios.patch(`https://usmosis-be-nc-news.onrender.com/api/articles/${article_id}`, {inc_votes: 1})
}

export const decreaseVotes = (article_id) => {
    return axios.patch(`https://usmosis-be-nc-news.onrender.com/api/articles/${article_id}`, {inc_votes: -1})
}

