const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

//Anime Routes
const animeController = require("./controllers/animeController.js");
app.use("/animes", animeController);

//Routes

  //Home
app.get("/", (req, rest) => {
  rest.send("Welcome to my Anime App!");
})

  //404
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;