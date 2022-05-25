// dependencies
require("dotenv").config()
const { PORT = 3001, DATABASE_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const People = require("./models/peopleSchema");
const cors = require("cors");
const morgan = require("morgan");


// Database Connection
mongoose.connect(DATABASE_URL)
mongoose.connection
    .on("open", () => console.log("Connected"))
    .on("close", () => console.log("Disconnected"))
    .on("error", (error) => console.log(error))


// Middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Hello!!!!")
})

// Index
app.get("/people", async (req, res) => {
    try {
        res.json(await People.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Create
app.post("/people", async (req, res) => {
    try {
        let response = await People.create(req.body)
        res.json(response)
    } catch (error) {
        res.status(400).json(error)
    }
})

// delete
app.delete("/people/:id", async (req, res) => {
    try {
        res.json(await People.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error);
    }
})

// update
app.put("/people/:id", async (req, res) => {
    try {
        res.json(
            await People.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            )
        )
    } catch (error) {
        res.status(400).json(error);
    }
})



// listener
app.listen(PORT, () => {
    console.log(`You are listening to ${PORT}`)
})