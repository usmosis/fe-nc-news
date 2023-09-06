import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getArticleById } from "../utils/api";
import CommentsList from "./CommentsList";
import { postNewComment } from "../utils/api";
import { increaseVotes, decreaseVotes } from "../utils/api";



export const SingleArticle = () => {

    const[singleArticle, setSingleArticle] = useState({})
    const[addComment, setAddComment] = useState("")
    const [comments, setComments] = useState([])

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

    const handleChange = (event) => {
        setAddComment(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newComment = {
            comment_id: Date.now(),
            author: "cooljmessy",
            body: addComment,
            created_at: new Date().toISOString(),
            votes: 0
        }
        setComments((currComments) => {
            return [newComment, ...currComments]
            })

        postNewComment(article_id, {username: "cooljmessy", body: addComment})
        .then((response)=> {
            setAddComment("")
        })
        .catch((err) => {
            <p>Sorry, there was an error, please try again.</p>
        })
        
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
        <form onSubmit={handleSubmit}>
            <label htmlFor="body">Post a new comment: </label>
            <textarea
            value={addComment || ""}
            id="body"
            onChange={handleChange}
            />
            <button>Post</button>
        </form>
        
        <CommentsList
        article_id={article_id}
        comments={comments}
        setComments={setComments}
        />
        </>
    )
}

export default SingleArticle;
