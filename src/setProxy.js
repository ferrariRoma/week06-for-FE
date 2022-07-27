const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // # 서버 URL or localhost:설정한포트번호
      target: "http://13.209.4.223:8080",
      changeOrigin: true,
    })
  );
};
