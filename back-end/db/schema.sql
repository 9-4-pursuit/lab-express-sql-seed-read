-- If DB exists, drop it
DROP DATABASE IF EXISTS songs_dev;

-- Create DB
CREATE DATABASE songs_dev;

-- Connect to DB
\c songs_dev;

--Create a table for songs
CREATE TABLE songs(
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);



