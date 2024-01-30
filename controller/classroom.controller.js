const ClassRoom = require("../models/classroom.model");

module.exports.getAllClass = async (req, res, next) => {
  const classRoom = await ClassRoom.find({});
  res.status(200).json({
    status: "Success",
    data: classRoom,
  });
};
