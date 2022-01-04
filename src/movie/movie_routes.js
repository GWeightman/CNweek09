const { Router } = require("express")
const mov_router = Router()
const { addMovie, deleteMovie, editMovie } = require("./movie_controllers")

mov_router.post("/movie", addMovie);
mov_router.delete("/movie", deleteMovie)
mov_router.put("/movie", editMovie)

module.exports = mov_router