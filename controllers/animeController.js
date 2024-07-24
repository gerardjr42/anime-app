const express = require("express");
const animes = express.Router();
const {getAllAnimes, getAnime, createAnime} = require("../queries/anime")

//Index
animes.get("/", async (req, res) => {
  const allAnimes = await getAllAnimes();
  if(allAnimes){
    res.status(200).json(allAnimes);
  } else {
    res.status(500).json({error: "Server Error"});
  }
});

//Show
animes.get("/:id", async (req, res) => {
  const { id } = req.params;
  const anime = await getAnime(id);
  if(anime) {
    res.json(anime);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

//Create Show
animes.post("/", async (req, res) => {
  const anime = await createAnime(req.body);
  res.json(anime);
});

module.exports = animes;
