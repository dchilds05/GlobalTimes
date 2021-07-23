const express = require('express');
const router = express.Router();
const mongoose = require ("mongoose")
const User = require('../models/User.model');

//ADD SAVED ARTICLES TO MY USER OBJECT
router.put("/", (req, res) => {
    const article = req.body
    console.log(req.session)
 
    const user = req.session.currentUser

    User.findByIdAndUpdate((user._id), {
        $push: {savedArticles: article.web_url}
    }, {new: true})
    .then((user) => {
        console.log(`${user} was updated with article number ${article.web_url}`)
        res.json(user)
    })
    .catch((err) => res.json(err))
})

//DELETE ARTICLES FROM MY "SAVED ARTICLES"
router.put("/:web_url", (req, res) => {
    const {web_url} = req.params
    const user = req.session.currentUser
    
    User.findById(user._id)
    .then((foundUser) => {
        let array = foundUser.savedArticles;
        for(let i= 0; i<array.length; i++){
            if(array[i] === web_url) {
                array.splice(i, 1);
            }
        }
        return(array)
    })
    .then((array) => {
        User.findByIdAndUpdate(user._id, {savedArticles: array}, {new: true})
        .then((newUser) => {
            res.json(newUser)
        })
    })
    .catch((err) => res.json(err))
})

module.exports = router;