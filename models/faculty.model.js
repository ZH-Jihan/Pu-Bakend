const  mongoose= require("mongoose");

const facultyScema = mongoose.Schema({
imgurl: String,
image: String,
name:String,
initialname:String,
id:String,
pnumber:String,
email:{
    type: String,
},
designation:String,
dipartment:String,
description:String,
university:String,
doj:String,
dob:String,
jobtype:String,
status:String,
sex:String
})

const Faculty = mongoose.model('Faculty',facultyScema)

module.exports = Faculty;