const express = require("express");
const cors = require("cors");
const app = express();



//middleware
app.use(express.json());
app.use(cors());

//controller
const animeController = require("./controllers/animeController.js");
app.use("/animes", animeController);

  //Home Route
app.get("/", (req, res) => {
  res.send("Welcome to my Anime App!");
})

  //404
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;