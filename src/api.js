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

const getFullArticle = (article_id) => {
    const URL = `/articles/${article_id}`
    return api.get(URL)
    .then(({data}) => {
        return data
    })
}


const getComments = ({article_id}) => {
    const URL = `/articles/${article_id}/comments`
    return api.get(URL)
    .then(({data}) => {
        return data
    })
}

const patchArticleVotes = (article_id, votes) => {
    const requestObject = {inc_votes: votes}
    const URL = `/articles/${article_id}`
    return api.patch(URL, requestObject)
    .then(({data}) => {
        return data
    })
}




export {getArticles, getFullArticle, getComments, patchArticleVotes}

