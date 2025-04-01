//import {getComments} from './api.js'
import {useState, useEffect} from 'react'
import {parseDate} from './utils'


const Article = ({article, articleViewType}) => {
    console.log(articleViewType, '<----in Article')

    // const [articles, setArticles] = useState([])


    // getArticles()
    // .then(({articles})=>{
    // setArticles(articles)
    // })



    return (
        <div className='article-short-view'>

                <img className='article-img' src={article.article_img_url}/>
                <p className='article-title'>{article.title}</p>
                <p className='article-author'>by: {article.author}</p>
                <p className='article-date'>posted on: {parseDate(article.created_at)}</p>
               <p className='article-topic'>Topic: {article.topic}</p>

                 <p className='article-comment-count'>Comment count: {article.comment_count}</p>
             <p className='article-votes'>Vote count: {article.votes}</p>

            <button className='article-show-comments-button'>Show comments</button>
            <button className='article-post-comments-button'>Post comment</button>
            <button className='article-vote-button'>Vote</button>
        </div>
    )

}

export {Article}
