const Province = require("../models/Province");
const Amphur = require("../models/Amphur");
const Boom = require("boom");

const getProvince = async (request, h) => {
  try {
    const provinces = await Province.find().exec();
    const total = await Province.countDocuments().exec();
    return {
      provinces,
      total
    };
  } catch (err) {
    return Boom.badImplementation("something went wrong!!");
  }
};

const getAmphur = async (request, h) => {
  const { province_id } = request.params;
  try {
    const amphurs = await Amphur.find({ province_id });
    const total = await Amphur.countDocuments({ province_id });
    return {
      amphurs,
      total
    };
  } catch (err) {
    return Boom.badImplementation("something went wrong!!");
  }
};

module.exports = {
  getAmphur,
  getProvince
};
