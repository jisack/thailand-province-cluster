const model = require("../../models/Amphur");
const seedData = require("../../data/amphurs.json");

// migrate seed data
const seedUp = () => {
  const seeds = seedData.forEach(data => {
    model.create({
      ...data,
      name_th: data.name_th.trim(),
      name_en: data.name_en.trim()
    });
  });
  return Promise.all(seeds)
    .then(() => console.log("success seed user ."))
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
