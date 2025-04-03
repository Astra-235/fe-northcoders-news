import { React } from "react";

const NewComment = ({article_id}) => {


    return (
       

            <div className='new-comment-inner'>
              <div className='comment-body'>COMMENT BODY FOR ARTICLE {article_id}</div>
              <div className='comment-author'>Comment by: FILL THIS OUT WITH USER DETAILS</div>
              <button className='comment-delete-button'>Delete Comment</button>
             </div>


      
    )
}

export {NewComment}

