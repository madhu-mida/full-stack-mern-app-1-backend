// dependencies
require("dotenv").config()
const PORT = process.env.PORT || 3001
const express = require("express");
const app = express();


// Routes
app.get("/", (req, res) => {
    res.send("Hello!!!!")
})

// listener
app.listen(PORT, () => {
    console.log(`You are listening to ${PORT}`)
})