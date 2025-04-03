import { useState, useEffect } from 'react'
import { parseDate } from './utils'
import { getFullArticle, patchArticleVotes } from "./api";
import { Comments } from "./Comments";
import { Modal } from "./Modal";


const Article = ({ article, article_id, articleViewType }) => {

    const [currentArticle, setCurrentArticle] = useState({})
    const [commentsOn, setCommentsOn] = useState(false)
    const [currentVotes, setCurrentVotes] = useState(0)
    const [error, setError] = useState(null)




    //entry via direct input of an article_id in the address bar
    if (article_id) {
        useEffect(() => {
            getFullArticle(article_id)
                .then(({ articles: fullArticle }) => {
                    setCurrentArticle(fullArticle)
                    setCurrentVotes(fullArticle.votes)
                });
        }, [])

        //entry via the articles list page
    } else {
        useEffect(() => {
            setCurrentArticle(article)
            setCurrentVotes(article.votes)

        }, [])
    }

    const commentsButtonText = commentsOn ? 'Hide Comments' : 'Show Comments'
    const displayAllComments = (article_id) => {
        setCommentsOn(!commentsOn)
    }



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

                <img className='article-img' src={currentArticle.article_img_url} />
                <p className='article-title'>{currentArticle.title}</p>
                <p className='article-author'>By: {currentArticle.author}</p>
                <p className='article-date'>Posted on: {parseDate(currentArticle.created_at)}</p>
                <p className='article-topic'>Topic: {currentArticle.topic}</p>
                <div className='article-body'>{currentArticle.body}</div>

                <p className='article-comment-count'>Comment count: {currentArticle.comment_count}</p>


                {/* Votes: */}
                <p className='article-votes'>Vote count: {currentVotes}</p>
                <button className='article-up-vote-button' onClick={() => { ammendVotes(1) }}>Vote +1</button> 
                <button className='article-down-vote-button' onClick={() => { ammendVotes(-1) }}>Vote -1 </button>
                {
                  (error)
                        ? <div><Modal error={error} setError={setError}/></div>
                        : <div></div>
                } 
                {/* Comments: */}
                <button className='article-show-comments-button' key='article-show-comments-button' value={currentArticle.article_id} onClick={() => { displayAllComments() }}>{commentsButtonText}</button>
                <button className='article-post-comments-button'>Post comment</button>
            </div>


            <div>
                {commentsOn & articleViewType === 'article-long-form' ? <div className='comments-list-outer'><Comments article_id={currentArticle.article_id} /></div> : <div></div>}
            </div>

        </div>
    )

}

export { Article }
