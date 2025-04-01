import axios from 'axios'


const api = axios.create({
    baseURL: 'https://nc-news-dywd.onrender.com/api/'
})


const getArticles = () => {
    return api.get('/articles')
    .then(({data}) => {
        return data
    })

}

export {getArticles}

