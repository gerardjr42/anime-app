const express = require("express");
const animes = express.Router();

//Require queries
const {getAllAnimes, getAnime, createAnime, deleteAnime} = require("../queries/anime")

//Require validations
const { checkTitle, checkBoolean } = require("../validations/checkAnimes.js");

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
animes.post("/", checkTitle, checkBoolean, async (req, res) => {
  const anime = await createAnime(req.body);
  res.json(anime);
});

//Delete Show
animes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedAnime = await deleteAnime(id);
  if(deletedAnime.id) {
    res.status(200).json(deletedAnime);
  } else {
    res.status(404).json("Anime not found");
  }
});

module.exports = animes;
