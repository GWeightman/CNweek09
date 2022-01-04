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

exports.deleteMovie = async (req, res) => {
    try {
        const mov_entry = await Movie.deleteOne(req.body)
        res.status(200).send({ message: "Successfully deleted", mov_entry })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "check server logs" })
    }
}

exports.editMovie = async (req, res) => {
    try{
        const mov_entry = req.body
        if (mov_entry.title){
            const movobj = { title: mov_entry.title }
            const newobj = { $set: {title: mov_entry.new}}
            await Movie.updateOne(movobj, newobj)
            res.status(200).send({ message: "Successfully updated", mov_entry })
        }
        else if (mov_entry.actor){
            const movobj = { actor: mov_entry.actor }
            const newobj = { $set: {actor: mov_entry.new}}
            await Movie.updateOne(movobj, newobj)
            res.status(200).send({ message: "Successfully updated", mov_entry })
        }
    } catch (error) {
        console.log (error)
        res.status(500).send({ message: "check server logs" })
    }
}