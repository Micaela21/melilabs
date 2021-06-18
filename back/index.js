const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require("morgan");
const search = require("./search");
const path = require("path");
const cors = require('cors')
const helmet = require("helmet");
const server1 = express();
server1.disable("x-powered-by");
const server = express();
server.use(helmet.hidePoweredBy());
// Configuration
const HOST = "localhost";
const API_SERVICE_URL = "https://a1d5ca30dd0f.ngrok.io";

const corsOptions = {
  origin: API_SERVICE_URL,
  credentials : true
}

// Proxy endpoints
server.use('/json_placeholder', createProxyMiddleware({
  target: API_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
      [`^/json_placeholder`]: '',
  },
}));

server.use(cors(corsOptions));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', API_SERVICE_URL);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.use(express.static("build"));
server.use(morgan("dev"));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.use("/api", search);

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});