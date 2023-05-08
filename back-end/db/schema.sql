-- file where the architecture for our database will exist
DROP DATABASE IF EXISTS songs_dev;

-- create our database
CREATE DATABASE songs_dev;

-- connect to database first
\c songs_dev;

-- create table for our bookmarks
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);