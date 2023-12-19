const mongoose = require("mongoose");

const facultyScema = mongoose.Schema({
  imgurl: String,
  image: String,
  name: {
    type: String,
    require: [true, "Please Inpun Your name"],
  },
  initialname: String,
  id: String,
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
