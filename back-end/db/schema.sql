-- IF our db already exist, drop it
DROP DATABASE IF EXISTS songs_dev;

-- create database
CREATE DATABASE songs_dev;

\c songs_dev

CREATE TABLE bookmarks (
    name Text NOT NULL,
    atrist TEXT NOT NULL
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);