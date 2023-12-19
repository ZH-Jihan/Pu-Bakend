const express = require("express");
const cors = require("cors");
const app = express();
const facultyRouters = require("./routes/v1/faculty.routes");
const regStudentRouters = require("./routes/v1/regstudents.routes");
const userRouter = require("./routes/v1/user.route");
const cookieParser = require("cookie-parser");

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser())


app.get("/", (req, res) => {
  res.send("Running Presidency App");
});

// Mongodb parteen = Schema -> Model -> Query
app.use('/api/v1/faculty', facultyRouters);
app.use('/api/v1/regstudent', regStudentRouters);
app.use("/api/v1/user", userRouter);


module.exports = app;
