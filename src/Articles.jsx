import {getArticles} from './api.js'
import {useState, useEffect} from 'react'
import {Article} from './Article'


const Articles = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
    getArticles()
    .then(({articles})=>{
    setArticles(articles)
    })
    }, [])



    return (
        <div className='articles'>
            <ul className='articles-list'>
        {articles.map((article) => {
            return <li><Article article={article} /></li>
        })}
        </ul>
        </div>
    )
    
}

export {Articles}
