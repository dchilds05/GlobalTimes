const express = require('express');
const router = express.Router();
const Comment = require("../models/Comment.model")


router.get("/", (req,res) => {
    const user = req.session.currentUser
    res.json(user)
})

router.post("/", (req,res) => {
    const user = req.session.currentUser
    const {text, article} = req.body
    Comment.create({
        text, 
        author: user,
        article
    })
    .then((newComment) => {
        console.log("comment author: ", user)
        res.json(newComment)
    })
    .catch((err) => res.json(err))
})

router.put("/", (req,res) => {
    const {_id, text} = req.body

    Comment.findByIdAndUpdate(_id,{text}, {new: true})
    .then((updatedComment) => {
        console.log("updated comment: ", updatedComment)
        res.json(updatedComment)
    })
    .catch((err) => res.json(err))
})

router.delete("/", (req,res) => {
    const {_id} = req.body

    Comment.findByIdAndRemove(_id)
    .then((removedComment) => {
        console.log("Comment successfully removed")
        res.json(`Comment with id ${removedComment._id} successfully removed`)
    })
    .catch((err) => res.json(err))
})



module.exports = router;