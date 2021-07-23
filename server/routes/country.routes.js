const express = require('express');
const router = express.Router();


router.get("/", (req,res) => {
    const user = req.session.currentUser
    res.json(user)
})

router.post("/", (req,res) => {
    const user = req.session.currentUser
    //Comment.create
})



module.exports = router;