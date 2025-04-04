import { useContext, useState } from "react";
import { postNewComment }  from "./api"
import {FailedSubmissionMessage} from './Modal'
import { UserContext } from "./context/UserContext";


const NewComment = ({ article_id, setIsPostingNewComment, setSubmissionSuccessful, setCommentCount }) => {


    const [newComment, setNewComment] = useState('')
    const [awaitingResponse, setAwaitingResponse] = useState(false)
    const [submissionFailed, setSubmissionFailed] = useState(false)
    const {username} = useContext(UserContext)
   

    const cancelComment = () => {
        setIsPostingNewComment(false)
        setNewComment('')
    }

    const submitComment = () => {
        setSubmissionFailed(false)
        setAwaitingResponse(true)
        setCommentCount((commentCount) => Number(commentCount) + 1)
        postNewComment(article_id, username, newComment)
        .then((data)=>{
            setAwaitingResponse(false)
            setNewComment('')
            setSubmissionSuccessful(true)
            setIsPostingNewComment(false)
        .catch((err)=>{
            setAwaitingResponse(false)
            setSubmissionFailed(true)
            setCommentCount((commentCount) => Number(commentCount) - 1)
            
        })            


        })

    }

    const updateNewComment = (e) => {
        setNewComment(e.target.value)
    }

    return (


        <div className='new-comment-inner'>


            {awaitingResponse ?  <input className="new-comment-content" value={newComment}/> : <input className="new-comment-content" value={newComment} onChange={updateNewComment}/>}
           
            {awaitingResponse ? <div></div>  : <button className='new-comment-cancel-button' onClick={cancelComment}>Cancel Comment</button>}

            {awaitingResponse ?  <button className='new-comment-submit-button' >Submitting...</button> :  <button className='new-comment-submit-button' onClick={submitComment}>Submit Comment</button>}
           

             
            {submissionFailed ? <div><FailedSubmissionMessage setSubmissionFailed={setSubmissionFailed}/></div> : <div></div>} 
            
           
            
            
            




        </div>



    )
}

export { NewComment }

