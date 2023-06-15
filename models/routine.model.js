const  mongoose= require("mongoose");

const routinScema = mongoose.Schema({
    dipartment:String,
      program: String,
      course:String,
      croom: String,
      teacher: String,
      day: String,
      section: String,
      semester: String,
      tslot: String,
      description: String
});

const Routin = mongoose.model('Routin', routinScema);

module.exports = Routin;