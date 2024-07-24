const db = require("../db/dbConfig.js");

//Get All Anime Shows
const getAllAnimes = async () => {
  try {
    const allAnimes = await db.any("SELECT * FROM animes");
    return allAnimes;
  } catch (error) {
    return error;
  }
};

//Get One Show
const getAnime = async (id) => {
  try {
    const oneAnime = await db.one("SELECT * FROM animes WHERE anime_id=$1", id);
    return oneAnime;
  } catch(error) {
    return error;
  }
}

//Create an anime entry
const createAnime = async (anime) => {
  try {
    const newAnime = await db.one(
      "INSERT INTO animes (title, genre, about, seasons, image_url, rating, is_favorite) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", 
      [anime.title, anime.genre, anime.about, anime.seasons, anime.image_url, anime.rating, anime.is_favorite]
    );
    return newAnime;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAnimes,
  getAnime,
  createAnime,
};