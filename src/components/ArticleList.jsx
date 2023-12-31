import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles, getArticlesByTopic } from "../utils/api";
import { useParams } from "react-router-dom";

const ArticleList = ({sortBy, order}) => {
const [articles, setArticles] = useState([])

const {slug} = useParams()

useEffect(()=>{

        
        getArticlesByTopic(slug, sortBy, order)
        .then((response) => {
            const {articles} = response.data
            setArticles(articles)
        })

},[slug, sortBy, order])


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