const model = require("../../models/Province");
const seedData = require("../../data/province.json");

// migrate seed data
const seedUp = () => {
  const seeds = seedData.forEach(data => {
    model.create({
      ...data,
      name_th: data.name_th.trim(),
      name_en: data.name_en.trim(),
      name_zh: data.name_zh.trim()
    });
  });
  return Promise.all(seeds)
    .then(() => console.log("success seed province ."))
    .catch(err => console.log(err));
};

// clean seed data
const seedDown = () => {
  return model
    .deleteMany({})
    .then(() => console.log("success clear all collection ."))
    .catch(err => console.log(err));
};

module.exports = {
  seedUp,
  seedDown
};
