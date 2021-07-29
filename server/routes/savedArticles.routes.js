const express = require('express');
const router = express.Router();
const mongoose = require ("mongoose")
const User = require('../models/User.model');
const SavedArticle = require('../models/SavedArticle.model');

//ADD SAVED ARTICLES TO MY USER OBJECT
router.put("/", (req, res) => {
    const {web_url} = req.body
    const user = req.session.currentUser

    SavedArticle.findOne({web_url})
    .then((article)=> {
        if(article){
            User.findByIdAndUpdate(user._id, {
                $addToSet: {"savedArticles": article._id}
            }, {new: true})
            .then((user) => {
                res.json(user)
            })
        } else {
            SavedArticle.create(req.body)
            .then((newArticle) => {
                User.findByIdAndUpdate(user._id, {
                    $addToSet: {"savedArticles": newArticle._id}
                }, {new: true})
                .then((user) => {
                    res.json(user)
                })
            })
        }
    })
    .catch((err) => res.json(err))
})

//DELETE ARTICLES FROM MY "SAVED ARTICLES"
router.put("/removeFavorite", (req, res) => {
    const {web_url} = req.body
    const user = req.session.currentUser

    console.log("url: ", web_url, "user: ", user)
    
    SavedArticle.findOne({web_url})
    .then((article) => {
        User.findByIdAndUpdate(user._id, {
            $pull: {"savedArticles": article._id}
        }, {new: true})
        .then((user) => {
            console.log(`${user} pulled article id ${article._id}`)
            res.json(user)
        })
    })
    .catch((err) => res.json(err))
})

module.exports = router;