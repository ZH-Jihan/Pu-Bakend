const Faculty = require("../models/faculty.model");

module.exports.getAllFaculty = async (req, res, next) => {
  const allFaculty = await Faculty.find({});
  res.status(200).json({
    status: "Success",
    data: allFaculty,
  });
};
module.exports.postAFaculty = (req, res, next) => {
  res.send("faculty Add");
};
