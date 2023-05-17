\c playlists_dev

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Fame', 'David Bowie', null, '4:12',true),
('Spill the Wine', 'War', 'Anthology 1970-1974', '4:05', true);
-- ('Pusherman', 'Curtis Mayfield', 'Superfly', '5:00', true),
-- ('Memphis Soul Stew', 'King Curtis', 'King Size Soul', '3:00', true),
-- ('Spill the Wine', 'War', 'Anthology 1970-1974', '4:05', true),
-- ('Pusherman', 'Curtis Mayfield', 'Superfly', '5:00', true),
-- ('Memphis Soul Stew', 'King Curtis', 'King Size Soul', '3:00', true),
-- ('Spill the Wine', 'War', 'Anthology 1970-1974', '4:05', true),
-- ('Pusherman', 'Curtis Mayfield', 'Superfly', '5:00', true),
-- ('Spill the Wine', 'War', 'Anthology 1970-1974', '4:05', true),
-- ('Pusherman', 'Curtis Mayfield', 'Superfly', '5:00', true),
-- ('Memphis Soul Stew', 'King Curtis', 'King Size Soul', '3:00', true),
-- ('Spill the Wine', 'War', 'Anthology 1970-1974', '4:05', true),
-- ('Pusherman', 'Curtis Mayfield', 'Superfly', '5:00', true),
-- ('Memphis Soul Stew', 'King Curtis', 'King Size Soul', '3:00', true),
-- ('Memphis Soul Stew', 'King Curtis', 'King Size Soul', '3:00', true),
-- ('Can You Get to That', 'Funkadelic', 'Maggot Brain', '2:49', true);


INSERT INTO playlist (name, is_favorite) VALUES 
('Playlist 1', false),
('Playlist 2', true),
('Playlist 3', false);


-- INSERT INTO playlist_songs (name, artist, album, time, is_favorite, playlist_id) VALUES
-- ('Spill the Wine', 'War', 'Anthology 1970-1974', '4:05', true, 1),
-- ('Pusherman', 'Curtis Mayfield', 'Superfly', '5:00', true, 1),
-- ('Memphis Soul Stew', 'King Curtis', 'King Size Soul', '3:00', true, 1 ),
-- ('Can You Get to That', 'Funkadelic', 'Maggot Brain', '2:49', true, 1),
-- ('Spill the Wine', 'War', 'Anthology 1970-1974', '4:05', true, 2),
-- ('Pusherman', 'Curtis Mayfield', 'Superfly', '5:00', true, 2),
-- ('Memphis Soul Stew', 'King Curtis', 'King Size Soul', '3:00', true, 3),
-- ('Can You Get to That', 'Funkadelic', 'Maggot Brain', '2:49', true, 3);
