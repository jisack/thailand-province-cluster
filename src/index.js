"use strict";
const hapi = require("hapi");
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "../.env")
});

const router = require("./modules/router");

const server = hapi.server({
  port: 8000,
  host: "0.0.0.0",
  routes: {
    cors: {
      origin: ["*"]
    }
  },
  debug: {
    log: ["*"]
  }
});

server.route([
  {
    method: "GET",
    path: "/null",
    handler: (request, h) => {
      process.exit(1);
    }
  },
  {
    method: "GET",
    path: "/health",
    handler: (request, h) => {
      return { ok: true };
    }
  }
]);

const init = async () => {
  await router(server);
  await server.start();
  console.log(`Server running at : ${server.info.uri}`);
};

server.events.on("log", (event, tags) => {
  console.log(tags);
});

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
