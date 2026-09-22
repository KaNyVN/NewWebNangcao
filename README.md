# NewWebNangcao

Ứng dụng tin tức đơn giản được chuyển từ Node.js HTTP sang Express Framework theo mô hình MVC.

## Chạy project

1. Cài MySQL và chạy nội dung trong `database/init.sql`.
2. Kiểm tra cấu hình kết nối trong `config/db.js` (mặc định: `localhost`, user `root`, mật khẩu rỗng, database `newsdb`).
3. Cài package và khởi động:

```bash
npm install
npm start
```

Trong lúc phát triển có thể dùng:

```bash
npm run dev
```

Website chạy tại `http://localhost:3000`.

## Các route

- `/` - Trang chủ
- `/about` - Giới thiệu
- `/news` - Danh sách bài viết
- `/news/:id` - Chi tiết bài viết
- `/search?keyword=...` - Tìm kiếm
- `/login` - Đăng nhập minh họa
