const adminSeeder = require("./admin");
const path = require("path");
const connectDB = require("../");

require("dotenv").config({
  path: path.join(__dirname, "../../../.env")
});

const SEEDTYPE = process.env.SEEDTYPE;

const initSeed = async () => {
  await connectDB();
  await adminSeeder.seedUp();
};

const initSeedDown = async () => {
  await connectDB();
  await adminSeeder.seedDown();
};

if (SEEDTYPE === "UP") {
  initSeed();
} else if (SEEDTYPE === "DOWN") {
  initSeedDown();
}
