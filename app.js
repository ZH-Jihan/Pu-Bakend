const express = require("express");
const cors = require("cors");
const app = express();
const  mongoose = require("mongoose");
const facultyRouters = require("./routes/v1/faculty.routes");
const routinRouters = require("./routes/v1/routin.router");

// Middleware
app.use(cors());
app.use(express.json());

// Schema Desing
const routinSchema = mongoose.Schema({
  dipartment:{
    type: String,
    required: [true,"Plase Probide Department Name"],
    trim:true,
  },
  course: String
})

// Mongodb parteen = Schema -> Model -> Query

// Model
const Product = mongoose.model('Product',routinSchema)


app.use('/api/v1/faculty', facultyRouters)
app.use('/api/v1/routin', routinRouters)



app.get("/", (req, res) => {
  res.send("Running Presidency App");
});





module.exports = app;
