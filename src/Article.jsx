
import {useState, useEffect} from 'react'
import {parseDate} from './utils'
import {getComments, getFullArticle} from "./api";


const Article = ({article, article_id, articleViewType}) => {
    
    const [currentArticle, setCurrentArticle] = useState({})
    const [commentsOn, setCommentsOn] = useState(false)
    const [comments, setComments] = useState([])

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
        getComments(article_id)
        .then(({comments}) => {
            setComments(comments)
            setCommentsOn(!commentsOn)
        })

}

    return (
        <div className={articleViewType}>

                <img className='article-img' src={currentArticle.article_img_url}/>
                <p className='article-title'>{currentArticle.title}</p>
                <p className='article-author'>by: {currentArticle.author}</p>
                <p className='article-date'>posted on: {parseDate(currentArticle.created_at)}</p>
               <p className='article-topic'>Topic: {currentArticle.topic}</p>
               <div className='article-body'>{currentArticle.body}</div>

                 <p className='article-comment-count'>Comment count: {currentArticle.comment_count}</p>
             <p className='article-votes'>Vote count: {currentArticle.votes}</p>

            <button className='article-show-comments-button' key='article-show-comments-button' value={currentArticle.article_id} onClick={()=>{displayAllComments(currentArticle.article_id)}}>{commentsButtonText}</button>
            <button className='article-post-comments-button'>Post comment</button>
            <button className='article-vote-button'>Vote</button>

            
            {commentsOn & articleViewType==='article-long-form'  ? <p>Comments here!!!!!</p> : <p></p> }





        </div>
    )

}

export {Article}
