const Faculty = require("../models/faculty.model");

module.exports.getAllFaculty = async (req, res, next) => {
  const allFaculty = await Faculty.find({});
  res.status(200).json({
    status: "Success",
    data: allFaculty,
  });
};
module.exports.getOneFaculty = async (req, res, next) => {
  const {id} = req.params;
  const oneFaculty = await Faculty.find({_id:id});
  res.status(200).json({
    status: "Success",
    data: oneFaculty,
  });
};
module.exports.postAFaculty = (req, res, next) => {
  res.send("faculty Add");
};
