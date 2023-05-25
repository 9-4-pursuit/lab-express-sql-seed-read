DROP DATABASE IF EXISTS songs_dev WITH (FORCE);

CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE IF NOT EXISTS songs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  artist TEXT NOT NULL,
  album TEXT,
  time VARCHAR(30),
  is_favorite BOOLEAN DEFAULT false
);
