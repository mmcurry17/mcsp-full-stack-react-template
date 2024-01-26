DROP TABLE IF EXISTS words;

CREATE TABLE words (
  id SERIAL,
  word VARCHAR(50),
  difficulty VARCHAR(10)
);

INSERT INTO words (word, difficulty) VALUES('hello', 'easy');
INSERT INTO words (word, difficulty) VALUES('world', 'easy');
INSERT INTO words (word, difficulty) VALUES('fullstack',  'medium');
INSERT INTO words (word, difficulty) VALUES('development', 'medium');
INSERT INTO words (word, difficulty) VALUES('asynchronous', 'hard');
INSERT INTO words (word, difficulty) VALUES('postgresql', 'hard');
