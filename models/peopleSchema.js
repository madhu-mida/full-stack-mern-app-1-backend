const { default: mongoose } = require("mongoose");


const { Schema, model } = mongoose;

const peopleSchema = new Schema({
    name: String,
    image: String,
    title: String,
})

const People = model("People", peopleSchema);
module.exports = People;