const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const computerRoutes = require("./routes/computer");

// Import de las routes

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
require("dotenv").config();

// Configuracion de la conexion a la bd
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log("Estamos conectados a nuestra BD");
  })
  .catch(() => {
    console.log("Houston tenemos un problema");
  });

app.use("/api/computer", computerRoutes);

module.exports = app;
