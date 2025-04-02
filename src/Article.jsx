import {useState, useEffect} from 'react'
import {parseDate} from './utils'
import { getFullArticle} from "./api";
import { Comments } from "./Comments";


const Article = ({article, article_id, articleViewType}) => {
    
    const [currentArticle, setCurrentArticle] = useState({})
    const [commentsOn, setCommentsOn] = useState(false)
    // const [comments, setComments] = useState([])

    const commentsButtonText = commentsOn? 'Hide Comments' : 'Show Comments'


    if(article_id){
    useEffect(()=>{
        getFullArticle(article_id)
        .then(({articles : fullArticle}) => {
            setCurrentArticle(fullArticle)
        });
    }, [])
    } else {
        useEffect(()=>{
            setCurrentArticle(article)
        }, [])
    }


 const displayAllComments = (article_id) => {
             setCommentsOn(!commentsOn)
         }



    return (
        <div>
        <div className={articleViewType}>

                <img className='article-img' src={currentArticle.article_img_url}/>
                <p className='article-title'>{currentArticle.title}</p>
                <p className='article-author'>By: {currentArticle.author}</p>
                <p className='article-date'>Posted on: {parseDate(currentArticle.created_at)}</p>
               <p className='article-topic'>Topic: {currentArticle.topic}</p>
               <div className='article-body'>{currentArticle.body}</div>

                 <p className='article-comment-count'>Comment count: {currentArticle.comment_count}</p>
             <p className='article-votes'>Vote count: {currentArticle.votes}</p>

            <button className='article-show-comments-button' key='article-show-comments-button' value={currentArticle.article_id} onClick={()=>{displayAllComments()}}>{commentsButtonText}</button>
            <button className='article-post-comments-button'>Post comment</button>
            <button className='article-vote-button'>Vote</button>

            
        </div>

        <div>
            {commentsOn & articleViewType==='article-long-form'  ? <div className='comments-list-outer'><Comments article_id={currentArticle.article_id}/></div> : <div></div> }
        </div>
        </div>
    )

}

export {Article}
