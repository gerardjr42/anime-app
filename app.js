const cors = require("cors");
const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());

//Anime Routes
const animeController = require("./controllers/animeController.js");
app.use("/animes", animeController);


  //Home
app.get("/", (req, res) => {
  res.send("Welcome to my Anime App!");
})

  //404
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;