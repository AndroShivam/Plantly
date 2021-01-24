const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/api",
    proxy( "plants?token=AJUcraEaYxH-sVl2C6wbHGi0GVj6P9Cuf0DDCb3IDp8", {
      target: "https://trefle.io/api/v1/",
      changeOrigin: true
    })
  );
};