-- db/schema.sql
DROP DATABASE IF EXISTS anime_backend;
CREATE DATABASE anime_backend;

\c anime_backend;

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