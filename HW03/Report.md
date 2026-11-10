# MSSV: 23120027
# Họ và tên: Nguyễn Hải Đăng
# HW03 – KIỂM THỬ GUI

## 1. Thiết kế và đánh giá GUI Checklist

### 1.1. Phạm vi đánh giá

Các màn hình được kiểm thử và thành phần của nó. 

| Màn hình | Thành phần / Chức năng | Nhóm tiêu chí |
|---|---|---|
| Admin - product | Product Table, CSV Import Component, Sidebar, CSV File Picker Input, CSV Import Button, Product Input Form, Category Dropdown | IA-01, IA-02, IA-03, IA-04 |
| Admin - login | Container Tổng (Màn hình nền), Khung chứa Form đăng nhập , Tiêu đề "Admin Login", Ô nhập Email, Ô nhập Mật khẩu, Nút Đăng nhập | IA-01, IA-02, IA-03, IA-04 |
| Admin - categories | Page Title, Add Category Form, Data Table, Input "Tên danh mục mới", Button "Thêm mới", Sidebar Menu Item "Danh mục", Button "Xóa" | IA-01, IA-02, IA-03, IA-04 |

### 1.2. Phương pháp xây dựng Checklist

Quy trình xây dựng GUI Checklist theo từng bước:

1. **Phân tích giao diện (GUI Analysis):** Phân tích các màn hình được chọn dựa trên source code, ảnh chụp giao diện và các yêu cầu hiện có.
2. **Phân loại thành phần giao diện (UI Control Classification):** Xác định và phân loại các thành phần như Text Box, Button, Dropdown, Checkbox, Link và Navigation.
3. **Xác định tiêu chí đánh giá (Evaluation Criteria Identification):** Xác định các tiêu chí phù hợp với bốn nhóm IA-01, IA-02, IA-03 và IA-04.
4. **Xây dựng Checklist (GUI Checklist Generation):** Chuyển các tiêu chí đã được xem xét thành những mục kiểm thử cụ thể, có thể quan sát và xác minh.

Mỗi bước trên tương ứng với 1 step khi làm việc với AI, qua mỗi step cần review lại trước khi AI làm bước tiếp theo.  

### 1.3. Kết quả thực hiện Checklist

Thống kê kết quả kiểm thử tổng thể.

| Trạng thái | Số lượng |
|---|---:|
| Tổng số checklist | 40 |
| Passed | 38 |
| Failed | 2 |
| N/A | 0 |

**Kết quả theo từng nhóm tiêu chí**

| Nhóm tiêu chí | Tổng số | Passed | Failed | N/A |
|---|---:|---:|---:|---:|
| IA-01 – Tiêu chuẩn giao diện chung | 10 | 10 | 0 | 0 |
| IA-02 – Biểu mẫu | 14 | 14 | 0 | 0 |
| IA-03 – Điều hướng | 5 | 5 | 0 | 0 |
| IA-04 – Phản hồi và trạng thái | 11 | 9 | 2 | 0 |

### 1.4. Các tiêu chí không đạt và lỗi phát hiện

| Checklist ID | Màn hình / Thành phần | Hành vi mong đợi | Hành vi thực tế |
|---|---|---|---|---|
| CHK-CAT-13 | Admin - categories  | Số thứ tự phải là số tiếp theo số thứ tự của danh mục cuối | Số thứ tự danh mục thêm bị lệch. Web vẫn dùng số tiếp theo với số thứ tự của danh mục đã bị xóa |
| CHK-PROD-09 | Admin - products | Khi bấm nút "Lưu sản phẩm", nếu sản phẩm hợp lệ và đang ở chế độ thêm thì sẽ có sản phẩm mới xuất hiện còn nếu ở chế độ sửa thì thông tin sản phẩm cũ phải được thay đổi. | Fail khi sửa tên sản phẩm. Sau khi sửa tên sản phẩm tất cả sản phẩm sẽ bị đổi theo. |

**Chi tiết lỗi được trình bày chi tiết trong file bug_report.pdf**

## 3. Kiểm thử đa nền tảng (Cross-Platform Testing)

### 3.1. Môi trường kiểm thử

Liệt kê các nền tảng, trình duyệt và thiết bị được sử dụng.

| Nền tảng | Trình duyệt / Ứng dụng | Hệ điều hành |
|---|---|---|---|
| Platform 1 | Chrome | Windows |
| Platform 2 | Firefox | Windows |
| Platform 3 | Chrome | Mobile - Android |

Bằng chứng các môi trường nằm ở task3/windows-chrome/Environment.png, task3/windows-firefox/Environment.png, .

### 3.2. Phạm vi và quy trình kiểm thử

- Tất cả các tiêu chí GUI Checklist sẽ được kiểm thử trên các nền tảng.
- Cách duy trì các bước kiểm thử và điều kiện giữa các nền tảng là giống nhau.

### 3.3. Kết quả kiểm thử đa nền tảng

| Test ID  | Platform 1 | Platform 2 | Platform 3 |
|---|---|---|---|---|
| Login screen | [11/0/0] | [11/0/0] | [Pass/Fail/N/A] |
| Product screen | [15/1/0] | [15/1/0] | [Pass/Fail/N/A] |
| Login screen | [12/1/0] | [12/1/0] | [Pass/Fail/N/A] |


### 3.4. Các lỗi và sự khác biệt  

| Vấn đề | Nền tảng | Hành vi mong đợi | Hành vi thực tế | Bằng chứng | 
|---|---|---|---|---|
|  Danh mục sau khi thêm không dùng đúng số thứ tự  | Chrome/Firefox(Windows), Chrome(Android) | Số thứ tự phải là số tiếp theo số thứ tự của danh mục cuối. | Số thứ tự danh mục thêm bị lệch. Web vẫn dùng số tiếp theo với số thứ tự của danh mục đã bị xóa | Đính kèm trong task3/windows-chrome/bug1.png, task3/windows-firefox/bug1.png và task3/Android-chrome/bug1.jpg |
|  Sau khi sửa tên sản phẩm và lưu thì tất cả các sản phẩm khác cũng bị thay đổi theo | Chrome/Firefox(Windows), Chrome(Android) | Khi bấm nút "Lưu sản phẩm", nếu sản phẩm hợp lệ và đang ở chế độ thêm thì sẽ có sản phẩm mới xuất hiện còn nếu ở chế độ sửa thì thông tin sản phẩm cũ phải được thay đổi. | Fail khi sửa tên sản phẩm. Sau khi sửa tên sản phẩm tất cả sản phẩm sẽ bị đổi theo. | Đính kèm trong task3/windows-chrome/bug2*.png, task3/windows-firefox/bug2.png và task3/Android-chrome/bug2.jpg |

#### sự khác biệt
| Vấn đề | Nền tảng | Nền tảng 1 | Nền tảng 2 | Bằng chứng | 
|---|---|---|---|---|
| Khác biệt khi thông báo lỗi giữa chrome và firefox | Chrome/Firefox(Windows)| Thông báo lỗi nằm ở trên | Thông báo lỗi giữa màn hình | Đính kèm trong task/windows-firefox/diff1.png |
| Khác biệt hiển thị ô text input đang được chọn | Chrome/Firefox(Windows) | Text input có viền đen | Text input có viền xanh | Đính kèm trong task3/windows-firefox/diff2.png |
| Khác biệt hiển thị form đăng nhập trên android | Android, Chrome/Firefox(Windows) | form căn giữa theo chiều dọc chiều ngang hẹp nên không cần căn | Căn giữa cả chiều dọc và ngang | Đính kèm trong task3/Android-chrome/diff1.jpg |
| Khác biệt hiển thị trang danh mục trên android | Android, Chrome/Firefox(Windows) | giao diện không reponsive trên chrome android | có giao diện reponsive | Đính kèm trong task3/Android-chrome/diff2.jpg |
| Khác biệt hiển thị trang sản phẩm trên android | Android, Chrome/Firefox(Windows) | giao diện không reponsive trên chrome android | có giao diện reponsive | Đính kèm trong task3/Android-chrome/diff3.jpg |
| Khác biệt hiển thị trang drop list trên android | Android, Chrome/Firefox(Windows) | list hiện giữa màn hình không drop down xuống như trên windows | list drop down | Đính kèm trong task3/Android-chrome/diff4.jpg |

