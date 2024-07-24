const express = require("express");
const animes = express.Router();
const {getAllAnimes} = require("../queries/anime")

//Index
animes.get("/", async (req, res) => {
  const allAnimes = await getAllAnimes();
  if(allAnimes){
    res.status(200).json(allAnimes);
  } else {
    res.status(500).json({error: "Server Error"});
  }
});

module.exports = animes;
