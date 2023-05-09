-- psql -U postgres -f db/seed.sql

\c songs_dev;

INSERT INTO albums (name, artist, release_date, is_favorite) VALUES
('Doo-Wops & Hooligans', 'Bruno Mars', 'October 4, 2010', true),
('Unorthodox Jukebox', 'Bruno Mars', 'December 7, 2012', true),
('Native', 'OneRepublic', 'March 22, 2013', true),
('The Diamond Collection', 'Post Malone', 'April 21, 2023', true);

INSERT INTO songs (albums_id, name, artist, album, time, is_favorite) VALUES
('2', 'Young Girls', 'Bruno Mars', 'Unorthodox Jukebox', '3:49', false),
('2', 'Locked out of Heaven', 'Bruno Mars', 'Unorthodox Jukebox', '3:54', false),
('2', 'Treasure', 'Bruno Mars', 'Unorthodox Jukebox', '2:56', true),
('2', 'When I Was Your Man', 'Bruno Mars', 'Unorthodox Jukebox', '3:34', true),
('2', 'If I Knew', 'Bruno Mars', 'Unorthodox Jukebox', '2:13', false),
('1', 'Just the Way You Are', 'Bruno Mars', 'Doo-Wops & Hooligans', '3:40', true),
('1', 'Talking to the Moon', 'Bruno Mars', 'Doo-Wops & Hooligans', '3:37', true),
('3', 'Counting Stars', 'OneRepublic', 'Native', '4:17', true),
('3', 'If I Lose Myself', 'OneRepublic', 'Native', '4:02', true),
('3', 'Au Revoir', 'OneRepublic', 'Native', '4:50', false),
('3', 'Burning Bridges', 'OneRepublic', 'Native', '4:18', true),
('3', 'Life In Color', 'OneRepublic', 'Native', '3:23', false),
('4', 'Chemical', 'Post Malone', 'The Diamond Collection', '3:04', true);
