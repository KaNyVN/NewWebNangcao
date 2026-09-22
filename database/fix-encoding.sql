-- Chạy file này một lần nếu dữ liệu trong database hiện tại đã bị lỗi mã hóa.
-- Lưu ý: ALTER TABLE chỉ sửa charset/collation, không thể khôi phục dữ liệu
-- đã bị lưu sai bằng latin1. Nếu dữ liệu đã thành "Láº­p trÃ¬nh", hãy xóa
-- các dòng sai và chạy lại database/init.sql hoặc nhập lại dữ liệu tiếng Việt.

USE newsdb;

ALTER DATABASE newsdb
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

ALTER TABLE posts
  CONVERT TO CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
