const express = require("express")

const app = express()

const port = 2470

app.get("/", (req, res) => {
 res.sendFile("Hello world")
})

app.listen(port, () => {
 console.log(`The server has start on port ${port}`)
})
