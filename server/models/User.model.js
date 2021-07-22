const {Schema, model} = require("mongoose");

const userSchema = newSchema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        tyoe: String,
        required: true
    },
    savedArticles: {
        type: Array,
    }
})

const User = model("model", userSchema)

module.export = User;