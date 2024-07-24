const db = require("../db/dbConfig.js");

const getAllAnimes = async () => {
  try {
    const allAnimes = await db.any("SELECT * FROM animes");
    return allAnimes;
  } catch (error) {
    return error;
  }
};

module.exports = {getAllAnimes}