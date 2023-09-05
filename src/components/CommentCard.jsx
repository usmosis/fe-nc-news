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
    return(
        <>
        <p>{body}</p>
        <p>author: {author}</p>
        <p>created at: {created_at}</p>
        <p>votes: {votes}</p>
        </>
    )
}

export default CommentCard;

