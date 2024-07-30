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
      "INSERT INTO animes (title, genre, about, seasons, image_url, cover_url, rating, is_favorite) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", 
      [anime.title, anime.genre, anime.about, anime.seasons, anime.image_url, anime.cover_url, anime.rating, anime.is_favorite]
    );
    return newAnime;
  } catch (error) {
    return error;
  }
};

//Delete an anime show
const deleteAnime = async (id) => {
  try {
    const deletedAnime = await db.one(
      "DELETE FROM animes WHERE anime_id = $1 RETURNING *", id
    );
    return deletedAnime;
  } catch (error) {
    return error;
  }
};

//Update an anime show
const updateAnime = async (id, anime) => {
  try {
    const updatedAnime = await db.one(
      "UPDATE animes SET title=$1, genre=$2, about=$3, seasons=$4, image_url=$5, cover_url=$6, rating=$7, is_favorite=$8 where anime_id=$9 RETURNING *",
      [anime.title, anime.genre, anime.about, anime.seasons, anime.image_url, anime.cover_url, anime.rating, anime.is_favorite, id]
    );
    return updatedAnime;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAnimes,
  getAnime,
  createAnime,
  deleteAnime,
  updateAnime,
};