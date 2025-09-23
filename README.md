# Cửa Hàng Công Nghệ Cho Bé

Dự án website thương mại điện tử bán đồ công nghệ dành cho học sinh lớp 3, được xây dựng bằng Angular và Tailwind CSS.

## 🎯 Mô tả dự án

Website cung cấp một giao diện thân thiện với trẻ em để mua sắm các sản phẩm công nghệ phù hợp như tablet, laptop mini, đồng hồ thông minh, tai nghe, camera và robot lập trình.

## ✨ Tính năng chính

- **Giao diện thân thiện trẻ em**: Màu sắc tươi sáng, font chữ dễ đọc
- **Responsive design**: Hoạt động tốt trên điện thoại và máy tính
- **Trang chủ với slider**: Hiển thị sản phẩm nổi bật
- **Danh sách sản phẩm**: Hiển thị đầy đủ thông tin sản phẩm
- **Giỏ hàng thông minh**: Thêm/xóa sản phẩm, lưu trữ localStorage
- **Trang giới thiệu**: Thông tin về cửa hàng
- **Trang liên hệ**: Form liên hệ và thông tin cửa hàng

## 🛠️ Công nghệ sử dụng

- **Frontend**: Angular 18 (TypeScript)
- **Styling**: Tailwind CSS
- **State Management**: RxJS & Services
- **Data Storage**: localStorage
- **Build Tool**: Angular CLI

## 📁 Cấu trúc dự án

```
src/
├── app/
│   ├── components/           # Các component
│   │   ├── header/          # Header navigation
│   │   ├── footer/          # Footer
│   │   ├── home/            # Trang chủ với slider
│   │   ├── about/           # Trang giới thiệu
│   │   ├── contact/         # Trang liên hệ
│   │   └── cart/            # Trang giỏ hàng
│   ├── services/            # Các service
│   │   ├── product.service.ts   # Quản lý sản phẩm
│   │   └── cart.service.ts      # Quản lý giỏ hàng
│   ├── models/              # Định nghĩa interface
│   │   └── product.model.ts
│   ├── app.component.ts     # Root component
│   ├── app.routes.ts        # Định tuyến
│   └── app.config.ts        # Cấu hình ứng dụng
├── assets/                  # Tài nguyên tĩnh
│   └── images/             # Hình ảnh sản phẩm
└── styles.css              # Global styles
```

## 🚀 Hướng dẫn cài đặt và chạy

### Yêu cầu hệ thống

- Node.js (phiên bản 18 trở lên)
- npm hoặc yarn
- Angular CLI

### Cài đặt

1. **Clone dự án** (nếu từ repository):
   ```bash
   git clone <repository-url>
   cd kids-tech-store
   ```

2. **Cài đặt dependencies**:
   ```bash
   npm install
   ```

3. **Cài đặt Angular CLI** (nếu chưa có):
   ```bash
   npm install -g @angular/cli
   ```

### Chạy dự án

1. **Development server**:
   ```bash
   npm start
   # hoặc
   ng serve
   ```

2. **Mở trình duyệt**:
   - Truy cập: `http://localhost:4200`

3. **Build production**:
   ```bash
   npm run build
   # hoặc
   ng build
   ```

## 📱 Responsive Design

Website được thiết kế responsive với:
- **Mobile First**: Tối ưu cho điện thoại trước
- **Breakpoints**: sm, md, lg, xl
- **Touch Friendly**: Nút bấm và navigation phù hợp cảm ứng

## 🎨 Design System

### Màu sắc chính

- **kid-blue**: #4FC3F7 (Xanh dương nhẹ)
- **kid-pink**: #F48FB1 (Hồng nhẹ)
- **kid-green**: #81C784 (Xanh lá nhẹ)
- **kid-orange**: #FFB74D (Cam nhẹ)
- **kid-purple**: #BA68C8 (Tím nhẹ)
- **kid-yellow**: #FFF176 (Vàng nhẹ)

### Typography

- **Font chính**: Comic Sans MS (thân thiện trẻ em)
- **Fallback**: cursive, system-ui

## 💾 Lưu trữ dữ liệu

- **Sản phẩm**: Hardcode trong ProductService
- **Giỏ hàng**: localStorage với key `kids-tech-cart`
- **Form liên hệ**: Console log (demo)

## 🔧 Các Service chính

### ProductService
- Quản lý danh sách sản phẩm
- Tìm kiếm sản phẩm
- Lọc theo danh mục

### CartService
- Thêm/xóa sản phẩm
- Cập nhật số lượng
- Tính tổng tiền
- Lưu trữ localStorage

## 🎯 Hướng phát triển

- [ ] Thêm backend API
- [ ] Chức năng thanh toán
- [ ] Đăng nhập/đăng ký
- [ ] Quản lý đơn hàng
- [ ] Đánh giá sản phẩm
- [ ] Tìm kiếm nâng cao

## 🐛 Gỡ lỗi

### Lỗi thường gặp

1. **Port 4200 đang được sử dụng**:
   ```bash
   ng serve --port 4201
   ```

2. **Node modules bị lỗi**:
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **Angular CLI không hoạt động**:
   ```bash
   npm install -g @angular/cli@latest
   ```

## 👥 Đóng góp

1. Fork dự án
2. Tạo branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Dự án này được phân phối dưới MIT License. Xem file `LICENSE` để biết thêm chi tiết.

## 📞 Liên hệ

- **Email**: info@cuahangcongnghe.com
- **Phone**: 0123-456-789
- **Website**: [Demo Link]

---

*Được phát triển với ❤️ dành cho các bé yêu công nghệ!*