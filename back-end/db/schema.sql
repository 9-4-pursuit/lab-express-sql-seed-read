-- If our db already exists, drop it
DROP DATABASE IF EXISTS songs_dev;

-- CREATE DATABASE 
CREATE DATABASE songs_dev;

-- Connect to db
\c songs_dev;

-- create a table for our songs
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN 
);


DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    title TEXT,
    content TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    song_id INTEGER REFERENCES songs (id)
    ON DELETE CASCADE
)