const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const search = require("./search");
const path = require("path");
const server = express();

server.use(express.static(path.join(__dirname + "/client/build/public/index.html")));
server.use(morgan("dev"));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cors());

server.use("/api", search);
console.log(__dirname + "/client/build/public/index.html")

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
