const express = require('express');
const router = express.Router();
const mongoose = require ("mongoose")
const User = require('../models/User.model');
const bcrypt = require('bcryptjs');
const saltRounds = process.env.SALT || 10;

router.get("/", (req,res) => {
    const user = req.session.currentUser
    res.json(user)
})

router.put("/", (req, res) => {
    const {username, password} = req.body

    const salt = bcrypt.genSaltSync(saltRounds);
	const hash = bcrypt.hashSync(password, salt);

    User.findByIdAndUpdate(req.session.currentUser._id, {username, password: hash}, {new: true})
    .then((updatedUser) => {
        res.json(updatedUser)})
    .catch((err) => res.json(err))
})

router.delete("/", (req, res) => {
    const {username, password} = req.body
    User.findByIdAndRemove(req.session.currentUser._id)
    .then((removedUser) => {
        console.log(`${removedUser} successfully removed`)
        res.json(updatedUser)})
    .catch((err) => res.json(err))
})

module.exports = router;