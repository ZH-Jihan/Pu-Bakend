const mongoose = require("mongoose");

const classroomScema = mongoose.Schema({
  roomname: {
    type: String,
    default: "Class Room",
  },
  roomnum: {
    type: String,
    unique: true,
    require: [true, "Please Enter Room Num"]
  },
  roominitial: {
    type: String,
    default: "C_Room",
  },
  capacity : String
});

const ClassRoom = mongoose.model("ClassRoom", classroomScema);

module.exports = ClassRoom;
