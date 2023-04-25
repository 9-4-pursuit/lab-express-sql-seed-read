-- If our db already exists, drop it
DROP DATABASE IF EXISTS playlists_dev;

-- CREATE DATABASE 
CREATE DATABASE playlists_dev;

-- Connect to db
\c playlists_dev;

-- create a table for our songs
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name string REQUIRED,
    artist string REQUIRED,
    album string,
    time string,
    is_favorite BOOLEAN
);