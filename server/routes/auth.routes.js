const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const saltRounds = process.env.SALT || 10;

const mongoose = require ("mongoose")
const User = require('../models/User.model');


router.post('/signup', (req, res)=>{
	const {username, password, country} = req.body

	if(!username || !password || !country) res.status(400).json({message: 'Please provide a username, a password, and a country of residence'})

	User.findOne({username})
	.then(user=> {
		if(user) {
			res.status(402).json({message: 'The username already exists'})
		} else {
		
			const salt = bcrypt.genSaltSync(saltRounds);
		    const hash = bcrypt.hashSync(password, salt);

			User.create({username, password: hash, country: country.toLowerCase()})
			.then( newUser => res.json(newUser))
			.catch(err=>res.json(err))
		}
	})
})

router.post('/login', (req, res)=>{
	const {username, password} = req.body

	User.findOne({username})
	.then(user=>{
		if(!user){
			res.status(400).json({message: 'The credentials are invalid'})
		}else{
			const encryptedPassword = user.password;
			const passwordCorrect = bcrypt.compareSync(password, encryptedPassword);

			if(passwordCorrect){
				req.session.currentUser = user
				res.json(user) // Express will close the response automatically with a 200 status code
			} else {
				res.status(400).res.json({message: 'The credentials are invalid'})
			}
		}
	})
	.catch(err=>res.json(err)) //Express will automatically set a 400 erorr status code in .cathc
})

router.get('/logout', (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			res.status(400).json({ message: 'Something went wrong! Yikes!' });
		} else {
			res.json({message: 'User successfully logged out'});
		}
	});
})

router.get('/isloggedin', (req, res) => {
	const loggedInUser = req.session.currentUser 
		if (loggedInUser) {
			res.json(loggedInUser);
		} else {
			res.status(403).json({ message: 'User not logged in' });
		}
});

module.exports = router;