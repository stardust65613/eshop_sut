Dưới đây là các tiêu chí đánh giá cho màn hình quản lý sản phẩm (**Products**) được phân loại theo bốn Interface Aspects (IA), tuân thủ nghiêm ngặt các yêu cầu từ source code (`frontend-admin.md`) và giao diện thực tế (`admin_product.png`)[cite: 1, 2].

---

### IA-01: General UI Standards (Tiêu chuẩn Giao diện Chung)

1. **Evaluation Aspect**: Bố cục layout tổng thể và hiển thị bảng dữ liệu/hình ảnh sản phẩm.
2. **Reason for Evaluation**: Đảm bảo giao diện quản lý sản phẩm được bố trí cân đối, trực quan giữa các khối chức năng (sidebar, import, form, bảng danh sách) và hình ảnh thu nhỏ hiển thị chính xác không bị vỡ khung[cite: 1, 2].
3. **Related UI Components**: Khung tổng thể trang quản lý sản phẩm, Bảng danh sách sản phẩm (`<table>`), Ảnh thu nhỏ sản phẩm (`<img>`), Cột hành động[cite: 1, 2].
4. **Verification Method**: Kiểm tra trực quan (Visual Inspection) và kiểm tra cơ chế dự phòng hình ảnh (`onError`)[cite: 2].
5. **Expected Behavior**: 
   * Khu vực nội dung sản phẩm căn chỉnh đồng bộ bên phải sidebar quản trị[cite: 1, 2].
   * Bảng danh sách hiển thị rõ các cột Ảnh, Tên SP, Giá, Hành động với định dạng trực quan[cite: 1, 2].
   * Ảnh thu nhỏ của sản phẩm hiển thị đúng kích thước cố định (`w-12 h-12 object-cover`), tự động chuyển sang ảnh thay thế (`placehold.co/50`) nếu đường dẫn ảnh bị lỗi[cite: 2].

---

### IA-02: Forms (Biểu mẫu & Nhập liệu)

1. **Evaluation Aspect**: Tính năng nhập liệu, ràng buộc dữ liệu của form Thêm/Sửa sản phẩm và cơ chế chọn/đọc file CSV[cite: 2].
2. **Reason for Evaluation**: Form nhập liệu và khối Import CSV là các thành phần tương tác chính để quản trị viên thêm mới, cập nhật hoặc nhập hàng loạt dữ liệu sản phẩm vào hệ thống[cite: 2].
3. **Related UI Components**: Text Box (Tên sản phẩm, Giá tiền, URL Ảnh), Textarea (Mô tả), Dropdown / Combo Box (Danh mục), File Picker (`<input type="file">`), Nút "Lưu sản phẩm", Nút "Hủy sửa", Nút "Import X sản phẩm"[cite: 1, 2].
4. **Verification Method**: Kiểm tra chức năng (Functional Testing), kiểm tra ràng buộc dữ liệu (Validation Testing) và kiểm tra thao tác xử lý tệp[cite: 2].
5. **Expected Behavior**: 
   * Trường "Tên sản phẩm" là bắt buộc; trường "Giá tiền" chấp nhận giá trị số; các trường URL và Mô tả hoạt động ổn định[cite: 2].
   * Dropdown danh mục hiển thị đầy đủ các tùy chọn danh mục lấy từ dữ liệu hệ thống (`categories`)[cite: 2].
   * Khi chọn file qua File Picker, hệ thống tự động đọc file CSV, phân tích cú pháp và hiển thị bảng xem trước (preview) dữ liệu cùng số lượng dòng tương ứng[cite: 2].
   * Nút "Lưu sản phẩm" gọi đúng API thêm mới (`POST`) hoặc cập nhật (`PUT`) tùy theo trạng thái form[cite: 2].

---

### IA-03: Navigation (Điều hướng & Liên kết)

1. **Evaluation Aspect**: Khả năng chuyển đổi giữa các module quản trị qua sidebar và liên kết tải tài nguyên phụ trợ[cite: 1, 2].
2. **Reason for Evaluation**: Đảm bảo quản trị viên có thể di chuyển liền mạch giữa trang Quản lý sản phẩm và các trang chức năng khác, đồng thời tải được file mẫu CSV nhanh chóng[cite: 1, 2].
3. **Related UI Components**: Hyperlink (Sidebar Menu: "Dashboard", "Danh mục", "Sản phẩm", "Mã Giảm Giá", "Đơn hàng", "Người dùng", "Đăng xuất"), Hyperlink tải file mẫu ("Tải file mẫu (template.csv)")[cite: 1, 2].
4. **Verification Method**: Kiểm tra định tuyến (Routing Check) và kiểm tra liên kết (Link Validation)[cite: 2].
5. **Expected Behavior**: 
   * Khi click vào mục "Sản phẩm" trên sidebar, trạng thái `activeTab` chuyển sang `"products"`, mục menu được tô sáng màu xanh (`text-blue-400`) và hiển thị đúng nội dung trang quản lý sản phẩm[cite: 2].
   * Khi click vào liên kết "Tải file mẫu (template.csv)", trình duyệt kích hoạt tải xuống file mẫu `template_import.csv` thông qua định dạng Data URI[cite: 2].

---

### IA-04: Feedback / State (Phản hồi hệ thống & Trạng thái giao diện)

1. **Evaluation Aspect**: Cơ chế hiển thị trạng thái xử lý, thay đổi tiêu đề form theo ngữ cảnh và thông báo kết quả thao tác[cite: 2].
2. **Reason for Evaluation**: Cung cấp phản hồi trực quan và kịp thời cho người dùng trong quá trình thực hiện các tác vụ bất đồng bộ (như import file) hoặc chuyển đổi giữa chế độ thêm mới và chỉnh sửa[cite: 2].
3. **Related UI Components**: Tiêu đề form ("Thêm sản phẩm mới" vs. "Sửa sản phẩm"), Nút "Hủy sửa", Nút "Import X sản phẩm" (với trạng thái "Đang import..."), Khung thông báo kết quả Import[cite: 1, 2].
4. **Verification Method**: Kiểm tra trạng thái giao diện (State Inspection) và kiểm tra phản hồi tương tác (Interactive Feedback Testing)[cite: 2].
6. **Expected Behavior**: 
   * Tiêu đề form và các nút chức năng tự động thay đổi linh hoạt theo trạng thái `product.id` (chế độ Thêm mới hiển thị "Thêm sản phẩm mới", chế độ Sửa hiển thị "Sửa sản phẩm" kèm nút "Hủy sửa")[cite: 2].
   * Khi bấm nút Import, nút chuyển sang trạng thái vô hiệu hóa (`disabled`) và đổi nhãn thành "Đang import..." trong suốt quá trình xử lý[cite: 2].
   * Sau khi import hoặc lưu sản phẩm hoàn tất, hệ thống hiển thị hộp thông báo kết quả rõ ràng (thông báo thành công kèm số lượng hoặc hiển thị chi tiết các dòng lỗi nếu có)[cite: 2].

---
--------------------------------------------------