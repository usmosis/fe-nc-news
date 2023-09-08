import { useEffect, useState } from "react"
import { getArticlesByTopic } from "../utils/api"
import { useParams } from "react-router-dom"
import ArticleCard from "./ArticleCard"

const ArticlesByTopic = () => {
const [articlesByTopic, setArticlesByTopic] = useState([])

console.log(slug)

useEffect(()=>{
    getArticlesByTopic(slug)
    .then((response) => {
        console.log("<<<here")
        const {articles} = response.data
        setArticlesByTopic(articles)
    })
},[])
    return articlesByTopic.map(({
        article_id,
        author,
        title,
        topic,
        created_at,
        votes, 
        article_img_url,
        comment_count
    }) => {
        return(
            <ArticleCard 
                 key={article_id}
                 author={author}
                 title={title}
                 topic={topic}
                 created_at={created_at}
                 article_img_url={article_img_url}
                 votes={votes}
                 comment_count={comment_count}
             />
            ) 
        

    }
    )
}

export default ArticlesByTopic