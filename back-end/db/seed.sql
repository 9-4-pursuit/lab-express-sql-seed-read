-- connect into database
\c songs_dev;

-- add intems into the table songs
INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('La Novelita', 'Aventura', 'Generation Next', '4:05', true ),
('Thoght It Was a Drought', 'Future', 'DS2', '4:25', true),
('Narcos', 'Anuel AA', 'Emmanuel', '4:19', true),
('Hey Mama', 'Kanye West', 'Late Registration', '5:05', true);
