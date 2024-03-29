const express = require("express");
const cors = require("cors");
const app = express();
const facultyRouters = require("./routes/v1/faculty.routes");
const userRouter = require("./routes/v1/user.route");
const classroomRouters = require("./routes/v1/classroom.router");
const cookieParser = require("cookie-parser");
const employeeroutes = require("./routes/v1/employee.routes");

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser())


app.get("/", (req, res) => {
  res.send("Running Presidency App");
});

// Mongodb parteen = Schema -> Model -> Query
app.use('/api/v1/faculty', facultyRouters);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/classroom", classroomRouters);
app.use("/api/v1/employee", employeeroutes);


module.exports = app;
