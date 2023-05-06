\c tuner;

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('The Hamster Hammy Song', 'Hammy Hamster', 'Hammy''s Greatest Hits Album', '2023-01-01', TRUE),
('The Gerbil Gummy Song', 'Gerby Gerbil', 'Gerby''s Greatest Hits Album', '2023-02-02', FALSE),
('The Chill Chinchilla Song', 'Chill Chinchilla', 'Chill''s Greatest Hits Album', '2023-03-03', FALSE);

-- open a new terminal, psql -U postgres -f db/seed.sql