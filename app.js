const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, rest) => {
  rest.send("Welcome to my Anime App!");
})

module.exports = app;