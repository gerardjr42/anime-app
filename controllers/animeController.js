const express = require("express");
const animes = express.Router();

animes.get("/", (req, res) => {
  res.json({status: "ok"});
});

module.exports = animes;
