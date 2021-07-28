const express = require('express');
const router = express.Router();
const mongoose = require ("mongoose")
const User = require('../models/User.model');

//ADD SAVED ARTICLES TO MY USER OBJECT
router.put("/", (req, res) => {
    const {abstract, headline, multimedia, pub_date, section_name, web_url} = req.body
    const user = req.session.currentUser

    console.log("in router, headline: ", headline.main)

    User.findByIdAndUpdate((user._id), {
        $addToSet: {"savedArticles": {abstract: abstract, headline: headline, multimedia: multimedia, pub_date: pub_date, section_name: section_name, web_url: web_url}}
    }, {new: true})
    .then((user) => {
        console.log(`${user} was updated with article url ${web_url}`)
        res.json(user)
    })
    .catch((err) => res.json(err))
})

//DELETE ARTICLES FROM MY "SAVED ARTICLES"
router.put("/removeFavorite", (req, res) => {
    const {web_url} = req.body
    const user = req.session.currentUser

    console.log("url: ", web_url, "user: ", user)
    
    User.findByIdAndUpdate((user._id), {
        $pull: {"savedArticles": web_url}
    }, {new: true})
    .then((user) => {
        console.log(`${user} pulled article id ${web_url}`)
        res.json(user)
    })
    .catch((err) => res.json(err))
})

module.exports = router;