-- If our db already exists, drop it
DROP DATABASE IF EXISTS songs_dev;

-- CREATE DATABASE 
CREATE DATABASE songs_dev;

-- Connect to db
\c songs_dev;

-- create a table for our songs
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name string REQUIRED,
    artist string REQUIRED,
    album string,
    time string,
    is_favorite BOOLEAN
);