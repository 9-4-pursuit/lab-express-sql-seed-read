-- IF DATABASE EXISTS -- DROP IT
DROP DATABASE IF EXISTS songs_dev;

-- Create our database! 🪐
CREATE DATABASE songs_dev;

-- Connect to DB
\c songs_dev;

-- Create a table for our songs
CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  artist TEXT,
  album TEXT,
  time TEXT,
  category TEXT,
  is_favorite BOOLEAN
);
