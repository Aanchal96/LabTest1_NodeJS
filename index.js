const path = require("path")
const express = require("express")

const app = express()

const port = process.env.PONPMRT || 3001

app.get("/", (req, res) => {
    res.send("HELLO")
})

app.get("/help", (req, res) => {
    res.send("HELP!!")
})

app.use((req,res) => {
    //  res.status(404).send("404 This page does not exist")    
    res.status(404).sendFile(path.join(__dirname, "/views/404.html"))
})

const startServer = () => {
    console.log(`The server is running on http://localhost:${port}`)
    console.log(`Press CTRL + C to exit`)
}

app.listen(port, startServer)