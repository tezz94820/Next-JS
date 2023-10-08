import React, { useState } from 'react'

function Comments() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('')
    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data);
    }

    const CommentAdder = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                text: newComment
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }
  return (
    <>
        <input type='text' value={newComment} onChange={e => setNewComment(e.target.value)} />&nbsp;&nbsp;
        <button onClick={CommentAdder}> Add Comment</button> <br/>
        <button onClick={fetchComments}> Load Comments</button>
        {
            comments.map( comment => {
                return (
                    <div key={comment.id}>
                        <b>{comment.id}</b> {comment.text}
                    </div>
                )
            })
        }
    </>
  )
}

export default Comments