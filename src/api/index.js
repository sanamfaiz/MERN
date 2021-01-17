import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const insertArticle = payload => api.post(`/article`, payload)
export const getAllArticles = () => api.get(`/articles`)
export const getTop = () => api.get(`/articletop`)
export const getTop5 = () => api.get(`/articletop5`)
export const updateArticleById = (id, payload) => api.put(`/article/${id}`, payload)
export const updateArticleLikeById = (id, payload) => api.put(`/articleLike/${id}`, payload)
export const deleteArticleById = id => api.delete(`/article/${id}`)
export const getArticleById = id => api.get(`/article/${id}`)
export const getArticleCommentsById = id => api.get(`/comments/${id}`)
export const getTopbyID = id => api.get(`/articletop5ByID/${id}`)
export const insertArticleComments = payload => api.post(`/comments`, payload)

const apis = {
    insertArticle,
    getAllArticles,
    updateArticleById,
    deleteArticleById,
    getArticleById,getTop,getTop5,updateArticleLikeById,getArticleCommentsById,insertArticleComments,getTopbyID
}

export default apis