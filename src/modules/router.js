const { getProvince, getAmphur } = require("./controller");

module.exports = server => {
  server.route([
    {
      method: "GET",
      path: "/",
      handler: () => {
        return "<h1>Welcome to Thailand Province and Amphur Service REMOVE KUY!!!</h>";
      }
    },
    {
      method: "GET",
      path: "/provinces",
      handler: getProvince
    },
    {
      method: "GET",
      path: "/amphurs/{province_id}",
      handler: getAmphur
    }
  ]);
};
