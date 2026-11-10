Dưới đây là kết quả phân tích và phân loại các UI Controls có trong trang quản lý sản phẩm (**Products**) dựa trên danh sách các component đã xác định ở Step 1, tuân thủ các quy định về nguồn cung cấp (`frontend-admin.md` và `admin_product.png`)[cite: 1, 2].

---

### 1. Text Box (Ô nhập văn bản)
* **Tên sản phẩm Input (`<input type="text">`)**: 
  * *Lý do phân loại*: Trường nhập liệu dạng văn bản một dòng, bắt buộc người dùng nhập tên của sản phẩm[cite: 2].
* **Giá tiền Input (`<input type="number">`)**: 
  * *Lý do phân loại*: Trường nhập liệu cho phép nhập giá trị số đại diện cho giá bán sản phẩm[cite: 2].
* **URL Ảnh Input (`<input type="text">`)**: 
  * *Lý do phân loại*: Trường nhập liệu dạng chuỗi văn bản dùng để dán đường dẫn (URL) hình ảnh sản phẩm[cite: 2].
* **Mô tả Input (`<textarea>`)**: 
  * *Lý do phân loại*: Vùng nhập liệu văn bản nhiều dòng cho phép nhập nội dung mô tả chi tiết về sản phẩm[cite: 2].

### 2. Dropdown / Combo Box (Hộp lựa chọn thả xuống)
* **Danh mục Dropdown (`<select>`)**: 
  * *Lý do phân loại*: Thành phần cho phép người dùng nhấp vào để mở rộng và chọn một danh mục sản phẩm từ danh sách tùy chọn có sẵn (`categories`)[cite: 2].

### 3. Button (Nút bấm tương tác)
* **Nút "Import X sản phẩm"**: Nút thực thi hành động gửi dữ liệu CSV đã đọc lên hệ thống backend[cite: 1, 2].
* **Nút "Lưu sản phẩm"**: Nút xác nhận hành động lưu (tạo mới hoặc cập nhật) thông tin sản phẩm từ form[cite: 1, 2].
* **Nút "Hủy sửa"**: Nút phụ trợ dùng để thoát khỏi chế độ chỉnh sửa và reset form về trạng thái thêm mới[cite: 2].
* **Nút "Sửa" (trong bảng danh sách)**: Nút thao tác trên từng dòng sản phẩm để nạp dữ liệu lên form chỉnh sửa phía trên[cite: 1, 2].
* **Nút "Xóa" (trong bảng danh sách)**: Nút thao tác trên từng dòng sản phẩm để gửi yêu cầu xóa sản phẩm khỏi hệ thống[cite: 1, 2].

### 4. Checkbox (Hộp kiểm)
* *Không có*: Không ghi nhận component Checkbox nào xuất hiện trong giao diện và source code của trang Quản lý sản phẩm[cite: 1, 2]. *(Lưu ý: Checkbox chỉ xuất hiện ở trang quản lý người dùng, không thuộc phạm vi trang sản phẩm).*

### 5. Radio Button (Nút lựa chọn đơn)
* *Không có*: Không xuất hiện trong phạm vi trang Quản lý sản phẩm[cite: 1, 2].

### 6. Hyperlink (Liên kết siêu văn bản)
* **Sidebar Navigation Links ("Dashboard", "Danh mục", "Sản phẩm", "Mã Giảm Giá", "Đơn hàng", "Người dùng", "Đăng xuất")**: Các liên kết dạng văn bản dùng để chuyển đổi qua lại giữa các module quản trị hệ thống[cite: 1, 2].
* **Link "Tải file mẫu (template.csv)"**: Liên kết định dạng Data URI cho phép người dùng bấm vào để tải trực tiếp file CSV mẫu về máy[cite: 1, 2].

### 7. Image (Hình ảnh)
* **Ảnh thu nhỏ sản phẩm (`<img>`)**: Thẻ hình ảnh hiển thị thumbnail đại diện cho từng sản phẩm trong bảng danh sách, tích hợp cơ chế ảnh dự phòng (`onError`) khi link hỏng[cite: 1, 2].

### 8. Grid Control (Bảng dữ liệu dạng lưới)
* **Bảng danh sách sản phẩm (`<table>`)**: Thành phần hiển thị dữ liệu sản phẩm dưới dạng bảng lưới gồm các hàng và cột (Ảnh, Tên SP, Giá, Hành động)[cite: 1, 2].
* **Bảng xem trước dữ liệu CSV (`<table>` trong khung Preview)**: Thành phần bảng hiển thị cấu trúc dữ liệu thô được đọc từ file CSV để admin kiểm tra trước khi import[cite: 2].

### 9. List Box (Hộp danh sách)
* *Không có*: Không xuất hiện trong phạm vi trang Quản lý sản phẩm[cite: 1, 2].

### 10. Date Field (Trường chọn ngày tháng)
* *Không có*: Không xuất hiện trong phạm vi trang Quản lý sản phẩm (trường chọn ngày tháng chỉ tồn tại ở module Quản lý Mã Giảm Giá)[cite: 2].

### 11. Các thành phần khác không thuộc danh mục chuẩn (Other / Unclassified Controls)
* **File Picker Control (`<input type="file">`)**: Thành phần chọn tệp từ hệ thống cục bộ của người dùng để nạp file CSV[cite: 1, 2]. Control này không khớp hoàn toàn với Text Box hay Button thông thường, mang đặc tính riêng của trình duyệt dùng để tương tác với File System.

---
--------------------------------------------------