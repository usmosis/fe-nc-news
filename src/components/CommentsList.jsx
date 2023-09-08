import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";

const CommentsList = ({article_id, comments, setComments}) => {

const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    setIsLoading(true)
    getComments(article_id)
    .then((response) => {
        const {comments} = response.data;
        setComments(comments);
        setIsLoading(false)
    })
},[article_id])
    if(isLoading) return <p>...loading</p>
    if(comments.length === 0) return <p>There are no comments yet, be the first to post one!</p>
    return comments.map(({
        comment_id,
        body,
        article_id,
        author,
        votes,
        created_at,
        title,
        topic,
        article_img_url
    })=>{
        return (
            <CommentCard
            key={comment_id}
            comment_id={comment_id}
            body={body}
            article_id={article_id}
            author={author}
            created_at={created_at}
            title={title}
            topic={topic}
            article_img_url={article_img_url}
            votes={votes}
            />
 
        )
    }
    )
}

export default CommentsList;

