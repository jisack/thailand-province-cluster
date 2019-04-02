const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const AmphurSchema = new Schema({
  amphur_id: {
    type: String,
    index: true,
    unique: true
  },
  name_th: String,
  name_en: String,
  province: {
    type: ObjectId,
    ref: "province"
  }
});

module.exports = mongoose.model("amphurs", AmphurSchema);
