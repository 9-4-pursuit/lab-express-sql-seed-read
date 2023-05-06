const express = require(`express`)
const reviews = express.Router({mergeParams: true})
const {getAllReviews, getAReview, createReview, deleteReview, updateReview} = require(`../queries/reviews`)

reviews.get(`/`, async (req, res) => {
    const { songId } = req.params

    try {
        const allReviews = await getAllReviews(songId)
        res.json(allReviews)
    } catch (err) {
        return res.json(err)
    }
})

reviews.get(`/id`, async (req, res) => {
    const { id } = req.params
    const review = getAReview(id)

    if(review) {
        res.status(200).json(review)
    }else {
        res.status(404).json({error: `Server Error`})
    }
})

reviews.post(`/`, async (req, res) => {
    const newReview = req.body

    try {
        const addedReview = await createReview(newReview)
        res.status(200).json(addedReview)
    } catch (error) {
        res.status(404).json({error: error})
    }
})

reviews.delete(`/id`, async (req, res) => {
    const { id } = req.params

    try {
        const deletedReview = await deleteReview(id)
        res.status(200).json(deleteReview)
    } catch (error) {
        res.status(404).json({error: error})
    }
})

reviews.put(`/id`, async (req, res) => {
    const { id } = req.params

    const updatedReview = await updateReview(id, req.body)

    if (updatedReview.id) {
        res.status(200).json(updatedReview)
    } else {
        res.status(404).json(`No Review Found`)
    }
})

module.exports = reviews