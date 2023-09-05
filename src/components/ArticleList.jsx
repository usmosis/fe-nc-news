import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../utils/api";

const ArticleList = () => {
const [articles, setArticles] = useState([])


useEffect(()=>{
    getArticles()
    .then((response) => {
        const {articles} = response.data
        setArticles(articles)
    })
},[])


    return articles.map(
        ({article_id, 
            author, 
            title, 
            topic, 
            created_at, 
            article_img_url, 
            votes, 
            comment_count}) => {
                return (
            <ArticleCard
            key={article_id}
            article_id={article_id}
            author={author}
            title={title}
            topic={topic}
            created_at={created_at}
            article_img_url={article_img_url}
            votes={votes}
            comment_count={comment_count}
            />
                    
                )
        
    })
}

export default ArticleList;