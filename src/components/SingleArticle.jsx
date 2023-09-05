import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getArticleById } from "../utils/api";


const SingleArticle = () => {

    const[singleArticle, setSingleArticle] = useState({})

    const { article_id } = useParams()
    
    useEffect(()=>{
        getArticleById(article_id)
        .then((response) => {
            const {article} = response.data
            setSingleArticle(article)
        });
    },[])

    return (
        <>
        <h2>{singleArticle.title}</h2>
        <p>topic: {singleArticle.topic}</p>
        <p>author: {singleArticle.author}</p>
        <p>{singleArticle.body}</p>
        <p>created_at: {singleArticle.created_at}</p>
        <p>votes: {singleArticle.votes}</p>
        <img src={singleArticle.article_img_url}></img>
        </>
    )
}

export default SingleArticle;
