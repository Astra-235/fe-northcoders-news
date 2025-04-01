//import {getComments} from './api.js'
import {useState, useEffect} from 'react'


const Article = ({article}) => {

    // const [articles, setArticles] = useState([])


    // getArticles()
    // .then(({articles})=>{
    // setArticles(articles)
    // })



    return (
        <div className='article'>

                <img className='article-img' src={article.article_img_url}/>
                <p className='article-title'>{article.title}</p>
                <p className='article-author'>{article.author}</p>
                <p className='article-date'>{article.created_at}</p>
               <p className='article-topic'>{article.topic}</p>

                 <p className='article-comment-count'>{article.comment_count}</p>
             <p className='article-votes'>{article.votes}</p>

            <button className='article-show-comments-button'>Show comments</button>
            <button className='article-post-comments-button'>Post comment</button>
            <button className='article-vote-button'>Vote</button>
        </div>
    )

}

export {Article}
