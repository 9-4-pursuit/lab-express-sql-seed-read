-- IF our db already exists, drop it
DROP DATABASE IF EXISTS songs_dev;

-- Create database
CREATE DATABASE songs_dev;

-- Connect to the db
\c songs_dev;

-- Create a table for our songs
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);

-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     email TEXT NOT NULL,
--     password TEXT NOT NULL
-- );