const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const search = require("./search");
const path = require("path");
const server = express();

server.use(express.static("public"));
server.use(morgan("dev"));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cors());

server.use("/api", search);

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
