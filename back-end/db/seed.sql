\c songs_dev;

INSERT INTO songs (name, artist, album, , time, is_favorite) VALUES
('One Dance', 'Drake', 'Views', '2:54', true),
('Run This Town', 'Jay-Z', 'The Blueprint 3', '4:27', true),
('Halo', 'Beyonce', 'I Am... Sasha Fierce', 'dont know333', true);

INSERT INTO reviews (song_id, reviewer, title, content, rating) 

VALUES
('1', 'Paul', 'Melody', 'Had a cool melody to it ', 3),
('2', 'Barney', 'Tempo', ' The tempo was a bit fast ', 3),
('3', 'Jay', 'Mood', 'This bumped up the mood big time ', 5),
('3', 'Juliana', 'ehh', 'Not sure about this song', 2),
('4', 'David', 'Perfect', 'This is perfect for driving', 4),
('5', 'Kevin', 'Road trip', 'I had this on my playlist too', 3),
('1', 'Alison', 'A lifesaver!','Helped me get through my day!', 4),
('4', 'Hannah', 'Heard it i the store', 'I heard this in the store the other day', 4),
('3', 'Gabi', 'Great for cleaning', 'This was great to listen to while cleaning', 5); 