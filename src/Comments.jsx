import { getComments, removeComment } from "./api.js";
import { useContext, useState, useEffect } from "react";
import {parseDate} from './utils.js'
import { UserContext } from "./context/UserContext";


const Comments = ({article_id, setCommentCount}) => {

  const [comments, setComments] = useState([]);
  const {username} = useContext(UserContext)
  const [deletedComments, setDeletedComments] = useState([])







  useEffect(() => {
    getComments(article_id)
    .then(({ comments }) => {
      setComments(comments);
    });
  }, []);
 

  const deleteComment = (e) => {

   

    setCommentCount((count)=>count-1)
    const comment_id = e.target.value

    //update list of cancelled comments so that these can be shown as deleted
    const arrayDeletedComments = deletedComments
    arrayDeletedComments.push(Number(comment_id))
    setDeletedComments(arrayDeletedComments)

    removeComment(comment_id)
    .catch(()=>{
      setCommentCount((count)=>count+1)
    })
  }

  


  return (
    <div className='comments-list-inner'>
      <ul className={"comments-list"}>
        {comments.map((comment) => {
          let commentsListItemFormatting
          (deletedComments.includes(comment.comment_id)) ? commentsListItemFormatting='comments-list-item-deleted' : commentsListItemFormatting='comments-list-item'
          
          let commentBody
          (deletedComments.includes(comment.comment_id)) ? commentBody='DELETED' : commentBody=comment.body


          return (
            <li className={commentsListItemFormatting}>
            <div className='comment-body'>{commentBody}</div>
             <div className='comment-author'>Comment by: {comment.author}</div>
             <div className='comment-created-at'>Posted on: {parseDate(comment.created_at)}</div>
             <div className='comment-vote-count'>Vote count: {comment.votes}</div>
             <button className='comment-vote-button'>Vote</button>
            {comment.author===username ? 
            <button className='comment-delete-button' value={comment.comment_id} onClick={deleteComment} >Delete Comment</button>:<div></div>
             }
            </li>
          )

        })}
      </ul>
    </div>
  );
}

export { Comments };
