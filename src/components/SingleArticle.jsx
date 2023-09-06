import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getArticleById } from "../utils/api";
import CommentsList from "./CommentsList";
import { increaseVotes, decreaseVotes } from "../utils/api";



const SingleArticle = () => {

    const[singleArticle, setSingleArticle] = useState({})

    const { article_id } = useParams()
    
    useEffect(()=>{
        getArticleById(article_id)
        .then((response) => {
            const {article} = response.data
            setSingleArticle(article)
        })
        .catch((err) => {
            return (
                <p>Sorry, something went wrong, please try again</p>
            )
        });
    },[])
    
    const voteUp = () => {
        const singleArticleCopy = {...singleArticle, votes: singleArticle.votes + 1}
        setSingleArticle(singleArticleCopy);
        increaseVotes(article_id)
    }

    const voteDown = () => {
        const singleArticleCopy = {...singleArticle, votes: singleArticle.votes - 1}
        setSingleArticle(singleArticleCopy)
        decreaseVotes(article_id)
    }
    return (
        <>
        <h2>{singleArticle.title}</h2>
        <p>topic: {singleArticle.topic}</p>
        <p>author: {singleArticle.author}</p>
        <p>{singleArticle.body}</p>
        <p>created_at: {singleArticle.created_at}</p>
        <p>votes: {singleArticle.votes}</p>
        <img src={singleArticle.article_img_url}></img>
        <button onClick={() => {
            voteUp();
        }}>voteUp</button>
        <button onClick={() => {
            voteDown();
        }}>voteDown</button>
        <CommentsList
        article_id={article_id}
        />
        </>
    )
}

export default SingleArticle;
