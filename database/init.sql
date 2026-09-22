CREATE DATABASE IF NOT EXISTS newsdb
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE newsdb;

ALTER DATABASE newsdb
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  description TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Chuyển cả bảng cũ sang UTF-8 nếu database đã được tạo trước đó.
ALTER TABLE posts
  CONVERT TO CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

INSERT INTO posts (title, description)
SELECT 'NodeJS', 'Lập trình backend với Node.js thuần'
WHERE NOT EXISTS (SELECT 1 FROM posts WHERE title = 'NodeJS');

INSERT INTO posts (title, description)
SELECT 'Web động', 'Server trả về nội dung tương ứng với request'
WHERE NOT EXISTS (SELECT 1 FROM posts WHERE title = 'Web động');

INSERT INTO posts (title, description)
SELECT 'React', 'Lập trình giao diện frontend với React'
WHERE NOT EXISTS (SELECT 1 FROM posts WHERE title = 'React');
