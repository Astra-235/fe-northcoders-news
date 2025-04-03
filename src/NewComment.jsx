import { useState } from "react";

const NewComment = ({ article_id, setIsPostingNewComment }) => {

    const [newComment, setNewComment] = useState('')

    const cancelComment = () => {
        setIsPostingNewComment(false)
        setNewComment('')
    }

    return (


        <div className='new-comment-inner'>


            <input name="new-comment-content" value='enter comment here...'/>
            <button className='comment-cancel-button' onClick={cancelComment}>Cancel Comment</button>


        </div>



    )
}

export { NewComment }

