const User = require('../models/User.model');

const {Schema, model} = require("mongoose");

const commentSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId, 
        ref: "User",
        required: true
    },
    article: {
        type: Object,
        require: true
    }
})

const Comment = model("Comment", commentSchema)

module.exports = Comment;