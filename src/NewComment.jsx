import { useState } from "react";

const NewComment = ({ article_id, setIsPostingNewComment }) => {

    const [newComment, setNewComment] = useState('')

    const cancelComment = () => {
        setIsPostingNewComment(false)
        setNewComment('')
    }

    const submitComment = () => {
        setIsPostingNewComment(false)
        setNewComment('')
    }

    return (


        <div className='new-comment-inner'>


            <input className="new-comment-content" value='enter comment here...'/>
            <button className='new-comment-cancel-button' onClick={cancelComment}>Cancel Comment</button>
            <button className='new-comment-submit-button' onClick={submitComment}>Submit Comment</button>


        </div>



    )
}

export { NewComment }

