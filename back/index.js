const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const search = require("./search");
const path = require("path");
const cors = require('cors')
const helmet = require("helmet");
const server1 = express();
server1.disable("x-powered-by");
const server = express();
server.use(helmet.hidePoweredBy());

const corsOptions = {
  origin: 'http://localhost:3001',
  credentials : true
}

server.use(cors(corsOptions));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
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
