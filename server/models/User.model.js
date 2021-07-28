const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    savedArticles: {
        type: [{type: Schema.Types.ObjectId, ref: 'SavedArticle', default: []}]
    }
})

const User = model("User", userSchema)

module.exports = User;