import axios from "axios"

export const getArticles = () => {
    return axios.get("https://usmosis-be-nc-news.onrender.com/api/articles/")
}
export const getArticleById =(article_id) => {
    return axios.get(`https://usmosis-be-nc-news.onrender.com/api/articles/${article_id}/`)
    

}

