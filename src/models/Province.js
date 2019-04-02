const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProvinceSchema = new Schema({
  code: {
    type: String,
    index: true,
    unique: true
  },
  name_th: String,
  name_en: String,
  name_zh: String,
  amphurs: [
    {
      type: ObjectId,
      ref: "amphurs"
    }
  ]
});

module.exports = mongoose.model("provinces", ProvinceSchema);
