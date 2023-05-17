--delete/drop database if it already exist
DROP DATABASE IF EXISTS playlists_dev;

--create database
CREATE DATABASE playlists_dev;

--connect to the database
\c playlists_dev;

--create a table for the bookmarks
CREATE TABLE playlist (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    is_favorite BOOLEAN
);

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);

CREATE TABLE playlist_songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN,
    playlist_id INTEGER REFERENCES playlist(id) ON DELETE CASCADE
);