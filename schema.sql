DROP DATABASE IF EXISTS mmm_DB;
CREATE database mmm_DB;
USE mmm_DB;
CREATE TABLE user (
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NULL,
  image VARCHAR(100) NULL,
  PRIMARY KEY (user_id)
);
CREATE TABLE movie (
  movie_id INT NOT NULL AUTO_INCREMENT,
  imbd_id VARCHAR(100) NULL,
  PRIMARY KEY (movie_id)
);
CREATE TABLE review (
  id INT NOT NULL AUTO_INCREMENT,
  userId INT,
  CONSTRAINT fk_user_id
  FOREIGN KEY (userId)
  REFERENCES user(user_id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  movieId INT,
  CONSTRAINT fk_movie_id
  FOREIGN KEY (movieId)
  REFERENCES movie(movie_id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  giphy VARCHAR(200) NULL,
  review TEXT NOT NULL,
  plus INT default 0,
  minus INT default 0,
  rating INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO user (username) VALUES ('Carlos');
INSERT INTO user (username) VALUES ('Jennifer');
INSERT INTO user (username) VALUES ('Evelyn');

INSERT INTO movie (imdbID) VALUES ('tt0137523, fightclub');
INSERT INTO movie (imdbID) VALUES ('tt0469494, therewillbeblood');
INSERT INTO movie (imdbID) VALUES ('tt1798709, her');

INSERT INTO review (giphy) VALUES ('https://media2.giphy.com/media/BlVnrxJgTGsUw/giphy.gif?cid=e16717f8138ea6fc667a35b6f382d5e9a378be40bcdcba5b&rid=giphy.gif');
INSERT INTO review (giphy) VALUES ('https://media1.giphy.com/media/wACPZdg6nX52o/giphy.gif?cid=e16717f854bf85a005cf487c47d10ddba5732a0a5f9be718&rid=giphy.gif');
INSERT INTO review (giphy) VALUES ('https://media3.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif?cid=e16717f8367dc371330eb646fd35d9028457ad8bc0cf9402&rid=giphy.gif');