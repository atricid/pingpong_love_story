const express = require("express")
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get("/", (req, res) => {
    console.log("working")
    res.render("home.ejs")
})

app.get("/progress", (req, res) => {
    console.log("working")
    res.render("progress.ejs")
})

app.get("/game", (req, res) => {
    res.render("dialog.ejs")
})



app.listen(3000)