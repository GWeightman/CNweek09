const Movie = require("./movie_model")

exports.addMovie = async (req, res) => {
    try {
        const mov_entry = await Movie.create(req.body)
        res.status(201).send({ message: "Successfully added", mov_entry })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "check server logs" })
    }
};