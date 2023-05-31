-- If DB exists, drop it
DROP DATABASE IF EXISTS tuner;

-- Create DB
CREATE DATABASE tuner;

-- Connect to DB
\c tuner;

--Create a table for songs
CREATE TABLE songs(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);



