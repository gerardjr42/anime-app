const cors = require("cors");
const express = require("express");
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//Home Route
app.get("/", (req, res) => {
res.send("Welcome to my Anime App!");
})

//controller
const animeController = require("./controllers/animeController.js");
app.use("/animes", animeController);


  //404
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;