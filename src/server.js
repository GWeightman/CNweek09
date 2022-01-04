require("./db/connection")
const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const mov_router = require("./movie/movie_routes")

app.use(express.json())
app.use(mov_router)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


// app.get("/stuff", (req, res) => {
//     console.log(req)
//     res.send("win")
// }) 