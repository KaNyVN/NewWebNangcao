# NewWebNangcao

Ứng dụng tin tức Express MVC. Project có thể chạy trong GitHub Codespaces mà không cần cài MySQL trực tiếp vào Ubuntu: MySQL được chạy bằng Docker Compose.

## Chạy trong GitHub Codespaces

Codespaces thường có Docker sẵn. Từ thư mục gốc project:

```bash
npm install
cp .env.example .env
npm run db:up
npm start
```

Đợi khoảng vài giây để MySQL hoàn tất khởi tạo lần đầu, sau đó mở port `3000` trong tab **Ports** của Codespaces. Ứng dụng lắng nghe trên `0.0.0.0` để có thể truy cập qua forwarded port.

Kiểm tra nhanh các route:

- `/` - Trang chủ
- `/about` - Giới thiệu
- `/news` - Danh sách bài viết từ MySQL
- `/news/:id` - Chi tiết bài viết
- `/search?keyword=...` - Tìm kiếm
- `/login` - Đăng nhập minh họa

Xem log hoặc dừng database:

```bash
docker compose logs -f db
npm run db:down
```

## Vì sao không dùng `localhost` mặc định?

Trong Node.js, `localhost` có thể khiến mysql2 dùng Unix socket. Trong Codespaces socket có thể không tồn tại hoặc có quyền không phù hợp, dẫn tới lỗi `/var/run/mysqld/mysqld.sock (13)`. Cấu hình mặc định dùng TCP `127.0.0.1:3306`, còn Docker Compose ánh xạ cổng MySQL ra Codespace.

Có thể thay đổi cấu hình bằng cách sửa `.env`:

```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=newsuser
DB_PASSWORD=newspassword
DB_NAME=newsdb
```

Nếu chạy Node.js trong một container cùng Compose, đổi `DB_HOST` thành `db`.

## Nếu Codespace không có Docker

Có thể dùng MySQL local, nhưng phải chạy MySQL qua TCP và tạo database:

```bash
sudo service mysql start
mysql -h 127.0.0.1 -u root -p < database/init.sql
```

Sau đó chỉnh `.env` cho đúng user và password. Không dùng `mysqladmin -u root ping` không có `-h`, vì lệnh đó kiểm tra Unix socket thay vì TCP.
