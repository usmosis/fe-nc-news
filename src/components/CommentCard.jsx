import { useState } from "react"
import { deleteCommentById } from "../utils/api"

const CommentCard = ({
    comment_id, 
    body,
    article_id,
    author,
    created_at, 
    title,
    topic,
    article_img_url,
    votes
}) => {
const handleDelete = () => {
    
    deleteCommentById(comment_id)
    .then(() => {
        console.log("comment deleted")
    })

}
    return(
        <>
        <p>body: {body}</p>
        <p>author: {author}</p>
        <p>created at: {created_at}</p>
        <p>votes: {votes}</p>
        <button onClick={handleDelete}>delete</button>
        </>
    )
}

export default CommentCard;

