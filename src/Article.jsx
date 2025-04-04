import React, { useState, useEffect} from 'react'
import { parseDate } from './utils'
import { getFullArticle, patchArticleVotes } from "./api";
import { Comments } from "./Comments";
import { NewComment } from "./NewComment";
import { VoteModal, SuccessfulSubmissionMessage} from "./Modal";


const Article = ({ article, article_id, articleViewType }) => {

    //declaring state variables
    const [currentArticle, setCurrentArticle] = useState({})
    const [commentsOn, setCommentsOn] = useState(false)
    const [currentVotes, setCurrentVotes] = useState(0)
    const [error, setError] = useState(null)
    const [isPostingNewComment, setIsPostingNewComment] = useState(false)
    const [submissionSuccessful, setSubmissionSuccessful] = useState(false)
    const [commentCount, setCommentCount] = useState(false)




    //entry to ARTICLE component via direct input of an article_id in the address bar
    if (article_id) {
        useEffect(() => {
            getFullArticle(article_id)
                .then(({ articles: fullArticle }) => {
                    setCurrentArticle(fullArticle)
                    setCurrentVotes(fullArticle.votes)
                    setCommentCount(fullArticle.comment_count)
                });
        }, [])

        //entry to ARTICLE component via the articles list page
    } else {
        useEffect(() => {
            setCurrentArticle(article)
            setCurrentVotes(article.votes)
            setCommentCount(article.comment_count)

        }, [])
    }


    //for controlling the comments section
    const allCommentsButtonText = commentsOn ? 'Hide Comments' : 'Show Comments'
    const newCommentButtonStyle = isPostingNewComment ? 'post-comment-button-off' : 'post-comment-button-on'

    const displayAllComments = () => {
        setCommentsOn(!commentsOn)
    }
    const postNewComment = () => {
        setIsPostingNewComment(true)
    }



    //for controlling votes
    const ammendVotes = (newVote) => {
        setCurrentVotes((currentVotes) => currentVotes + newVote)
        setError(null)
        patchArticleVotes(currentArticle.article_id, newVote)
            .catch((err) => {
                setCurrentVotes((currentVotes) => currentVotes - newVote)
                setError('The vote count failed to update.  Please try again.')
            })
    }



    return (
        <div>
            <div className={articleViewType}>

                {/* display the article  */}
                <img className='article-img' src={currentArticle.article_img_url} />
                <p className='article-title'>{currentArticle.title}</p>
                <p className='article-author'>By: {currentArticle.author}</p>
                <p className='article-date'>Posted on: {parseDate(currentArticle.created_at)}</p>
                <p className='article-topic'>Topic: {currentArticle.topic}</p>
                <div className='article-body'>{currentArticle.body}</div>

                <p className='article-comment-count'>Comment count: {commentCount}</p>


                {/* vote section */}
                <p className='article-votes'>Vote count: {currentVotes}</p>
                <button className='article-up-vote-button' onClick={() => { ammendVotes(1) }}>Vote +1</button> 
                <button className='article-down-vote-button' onClick={() => { ammendVotes(-1) }}>Vote -1 </button>
                {
                  (error)
                        ? <div><VoteModal error={error} setError={setError}/></div>
                        : <div></div>
                } 


                {/* comments buttons */}
                <button className='article-show-comments-button' key='article-show-comments-button' value={currentArticle.article_id} onClick={displayAllComments}>{allCommentsButtonText}</button>
                <button className='article-post-comments-button' id={newCommentButtonStyle} key='post-comment' onClick={postNewComment}>Post comment</button>
            </div>


             {/* post a new comment */}
             <div>
                {isPostingNewComment  ? <div className='new-comment-outer'><NewComment article_id={currentArticle.article_id} setIsPostingNewComment={setIsPostingNewComment}  setSubmissionSuccessful={setSubmissionSuccessful} setCommentCount={setCommentCount}/></div> : <div></div>}
            </div>



            {/* view existing comments */}
            <div>
                {commentsOn ? <div className='comments-list-outer'><Comments article_id={currentArticle.article_id} setCommentCount={setCommentCount} /></div> : <div></div>}
            </div>

            {submissionSuccessful ? <div><SuccessfulSubmissionMessage setSubmissionSuccessful={setSubmissionSuccessful}/></div> : <div></div>}

        </div>
    )

}

export { Article }


