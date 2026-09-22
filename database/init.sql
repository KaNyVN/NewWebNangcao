CREATE DATABASE IF NOT EXISTS newsdb;

USE newsdb;

CREATE TABLE IF NOT EXISTS posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT
);

INSERT INTO posts (title, description)
SELECT 'NodeJS', 'Lập trình backend với Node.js thuần'
WHERE NOT EXISTS (SELECT 1 FROM posts WHERE title = 'NodeJS');

INSERT INTO posts (title, description)
SELECT 'Web động', 'Server trả về nội dung tương ứng với request'
WHERE NOT EXISTS (SELECT 1 FROM posts WHERE title = 'Web động');

INSERT INTO posts (title, description)
SELECT 'React', 'Lập trình giao diện frontend với React'
WHERE NOT EXISTS (SELECT 1 FROM posts WHERE title = 'React');
