const mongoose = require("mongoose")

const movie_schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    actor: {
        type: String,
        default: "Not Specified",
    },
})

const Movie = mongoose.model("Movie", movie_schema)

module.exports = Movie