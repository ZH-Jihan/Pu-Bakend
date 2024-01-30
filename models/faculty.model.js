const mongoose = require("mongoose");

const facultyScema = mongoose.Schema({
  imgurl: String,
  image: String,
  name: {
    type: String,
    require: [true, "Please Inpunt Your name"],
  },
  initialname: {
    type: String,
    require: [true, "Please Inpunt Your Initial Name"],
    unique: true
  },
  id: {
    type: String,
    require: [true, "Please Inpun Your ID"],
    unique: true
  },
  pnumber: String,
  email: {
    type: String,
    default: "No Email Set"
  },
  designation: {
    type:String,
    default: "Lecturer"
  },
  dipartment: {
    type:String,
    default:"Reg"
  },
  description: String,
  university: String,
  doj: String,
  dob: String,
  jobtype: String,
  status: String,
  sex: String,
});

const Faculty = mongoose.model("Faculty", facultyScema);

module.exports = Faculty;
