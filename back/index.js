const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const search = require("./routes/search");

const server = express();

server.use(morgan("dev"));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cors());

server.use("/api", search);

server.listen(3000, () => {
  console.log("Servidor en el puerto 3001");
});
