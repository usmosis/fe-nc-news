import { useState } from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({
    article_id, 
    author,
    title,
    topic,
    created_at,
    article_img_url, 
    votes, 
    comment_count
}) => {

    return (
        <>
        <p>author: {author}</p>
        <p>title: {title}</p>
        <p>topic: {topic}</p>
        <p>created_at: {created_at}</p>
        <img src={article_img_url}></img>
        <p>votes: {votes}</p>
        <p>comment_count: {comment_count}</p>
        <Link to={`/articles/${article_id}`}><button>Read</button></Link>
        </>
    )
}

export default ArticleCard
