const { Router } = require("express")
const mov_router = Router()
const { addMovie } = require("./movie_controllers")

mov_router.post("/movie", addMovie);

module.exports = mov_router