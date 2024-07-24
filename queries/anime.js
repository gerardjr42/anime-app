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

module.exports = {
  getAllAnimes,
  getAnime, 
};