import { getComments } from "./api.js";
import { useState, useEffect } from "react";
import {parseDate} from './utils.js'


const Comments = (article_id) => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id)
    .then(({ comments }) => {
        console.log(comments, '<--- in Comments')
      setComments(comments);
    });
  }, []);


  return (
    <div className='comments-list-inner'>
      <ul className="comments-list">
        {comments.map((comment) => {
          return (
            <li className='comments-list-item'>
             <div className='comment-body'>{comment.body}</div>
             <div className='comment-author'>Comment by: {comment.author}</div>
             <div className='comment-created-at'>Posted on: {parseDate(comment.created_at)}</div>
             <div className='comment-vote-count'>Vote count: {comment.votes}</div>
             <button className='comment-vote-button'>Vote</button>
             <button className='comment-delete-button'>Delete Comment</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { Comments };
