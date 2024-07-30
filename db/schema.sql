-- db/schema.sql
DROP DATABASE IF EXISTS animes_dev;
CREATE DATABASE animes_dev;

\c animes_dev;

CREATE TABLE animes (
  anime_id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  genre VARCHAR(50),
  about TEXT NOT NULL,
  seasons INTEGER DEFAULT 0,
  image_url VARCHAR(255),
  cover_url VARCHAR(255),
  rating DECIMAL (3,1) DEFAULT 0.0,
  is_favorite BOOLEAN DEFAULT false
);