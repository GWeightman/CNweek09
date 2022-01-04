const { Router } = require("express")
const mov_router = Router()
const { addMovie, deleteMovie } = require("./movie_controllers")

mov_router.post("/movie", addMovie);
mov_router.delete("/movie", deleteMovie)

module.exports = mov_router