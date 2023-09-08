import axios from "axios"

export const getArticles = (slug, sortBy, order) => {
    return axios.get("https://usmosis-be-nc-news.onrender.com/api/articles/", {params:{topic: slug, sort_by:sortBy, order:order}})
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

export const postNewComment = (article_id, newComment) => {
    return axios.post(`https://usmosis-be-nc-news.onrender.com/api/articles/${article_id}/comments`, newComment)
}

export const getTopics = () => {
    return axios.get("https://usmosis-be-nc-news.onrender.com/api/topics")
}

export const getArticlesByTopic = (slug, sortBy, order) => {
    return axios.get(`https://usmosis-be-nc-news.onrender.com/api/articles`, {params:{topic: slug, sort_by:sortBy, order:order}})
}

export const deleteCommentById = (comment_id) => {
    return axios.delete(`https://usmosis-be-nc-news.onrender.com/api/comments/${comment_id}`)
}