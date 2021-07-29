const {Schema, model} = require("mongoose");

const articleSchema = new Schema({
    abstract: {
        type: String,
        required: true,
    },
    headline: {
        type: String, 
        required: true
    },
    multimedia: {
        type: String,
        require: true
    },
    pub_date: {
        type: String,
        require: true
    },
    section_name: {
        type: String,
        require: true
    },
    web_url: {
        type: String,
        require: true
    },
})

const SavedArticle = model("SavedArticle", articleSchema)

module.exports = SavedArticle;