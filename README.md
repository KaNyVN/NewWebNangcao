# NewWebNangcao

Ứng dụng tin tức Express MVC. Project sử dụng `utf8mb4` ở database, bảng, cột và kết nối `mysql2` để hiển thị đúng tiếng Việt.

## Chạy trong GitHub Codespaces

```bash
npm install
cp .env.example .env
npm run db:up
npm start
```

Mở port `3000` trong tab **Ports** của Codespaces. Ứng dụng lắng nghe trên `0.0.0.0` để có thể truy cập qua forwarded port.

## Kiểm tra các route

- `/` - Trang chủ
- `/about` - Giới thiệu
- `/news` - Danh sách bài viết từ MySQL
- `/news/:id` - Chi tiết bài viết
- `/search?keyword=...` - Tìm kiếm
- `/login` - Đăng nhập minh họa

## Sửa lỗi tiếng Việt trong database hiện tại

Project đã cấu hình `utf8mb4` cho MySQL database, bảng `posts` và kết nối `mysql2`. Nếu container được tạo mới, `database/init.sql` sẽ tự thiết lập đúng encoding.

Nếu container cũ đã tồn tại, Docker sẽ không tự chạy lại file init. Có thể tạo lại database volume (cách đơn giản cho project học tập, dữ liệu mẫu sẽ được tạo lại):

```bash
docker compose down -v
npm run db:up
```

Nếu muốn giữ volume, chạy migration:

```bash
docker compose exec db mysql -unewsuser -pnewspassword newsdb < database/fix-encoding.sql
```

Lưu ý: migration sửa charset/collation nhưng không thể tự khôi phục chuỗi đã bị lưu sai thành `Láº­p trÃ¬nh`. Với dữ liệu mẫu bị hỏng, cách an toàn là tạo lại volume bằng `docker compose down -v` rồi `npm run db:up`.

## Chạy với MySQL cài trực tiếp

```bash
sudo service mysql start
mysql -h 127.0.0.1 -u root -p < database/init.sql
```

Nếu dùng user/password khác, sửa các biến trong `.env`:

```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=newsuser
DB_PASSWORD=newspassword
DB_NAME=newsdb
```
