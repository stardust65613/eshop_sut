Dưới đây là **GUI Checklist Items** cho màn hình **Quản lý Danh mục (Categories)** được chuyển đổi chi tiết từ các tiêu chí đánh giá đã phê duyệt ở Bước 3[cite: 1, 2]:

   ---

   ### Bảng GUI Checklist Items - Màn hình Quản lý Danh mục

   | ID | IA | Screen | Component | Checklist Item | Expected Result | Verification Method |
   | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
   | **CHK-CAT-01** | IA-01 | Categories | Page Title | Kiểm tra hiển thị tiêu đề màn hình quản lý danh mục | Tiêu đề hiển thị đúng văn bản "Quản lý Danh mục", phông chữ đậm lớn (`text-2xl font-bold`) và căn lề trái chuẩn xác[cite: 1, 2]. | Visual Inspection |
   | **CHK-CAT-02** | IA-01 | Categories | Add Category Form & Data Table | Kiểm tra bố cục và khoảng cách giữa form nhập và bảng dữ liệu | Form thêm mới nằm trên bảng danh sách danh mục với khoảng cách lề dưới (`mb-6`) nhất quán theo chuẩn giao diện Admin[cite: 1, 2]. | Visual Inspection |
   | **CHK-CAT-03** | IA-01 | Categories | Data Table Header | Kiểm tra hiển thị tiêu đề các cột trong bảng danh mục | Header bảng có nền màu xám (`bg-gray-200`) hiển thị đầy đủ 3 cột: "ID", "Tên Danh Mục", "Hành động" với chữ đậm[cite: 1, 2]. | Visual Inspection |
   | **CHK-CAT-04** | IA-01 | Categories | Data Table Rows | Kiểm tra định dạng hiển thị các dòng dữ liệu trong bảng | Các hàng dữ liệu có nền trắng, đường phân cách dưới (`border-b`), văn bản căn trái và cột ID có tiền tố `#` trước số ID (VD: `#1`)[cite: 1, 2]. | Visual Inspection |
   | **CHK-CAT-05** | IA-02 | Categories | Input "Tên danh mục mới" | Kiểm tra hiển thị placeholder và trạng thái ban đầu của ô input | Ô input có placeholder hiển thị đúng văn bản "Tên danh mục mới", trạng thái ban đầu trống[cite: 1, 2]. | Form Testing |
   | **CHK-CAT-06** | IA-02 | Categories | Input "Tên danh mục mới" | Kiểm tra khả năng nhập văn bản vào ô input tên danh mục | Ô input cho phép nhập văn bản bình thường và cập nhật đúng giá trị người dùng nhập từ bàn phím[cite: 2]. | Form Testing |
   | **CHK-CAT-07** | IA-02 | Categories | Button "Thêm mới" | Kiểm tra định dạng và kiểu dáng hiển thị của nút Thêm mới | Nút bấm có nền màu xanh dương (`bg-blue-600`), chữ trắng, bo góc (`rounded`), kích thước chuẩn[cite: 1, 2]. | Visual Inspection |
   | **CHK-CAT-08** | IA-02 | Categories | Add Category Form | Kiểm tra hành động gửi form khi click nút "Thêm mới" với dữ liệu hợp lệ | Danh mục mới xuất hiện giống như dữ liệu đã nhập . | Form Functional Testing |
   | **CHK-CAT-09** | IA-02 | Categories | Input "Tên danh mục mới" | Kiểm tra việc reset ô input sau khi thêm danh mục thành công | Ô input tự động được xóa sạch giá trị về chuỗi trống (`setCategoryName("")`) ngay sau khi tạo danh mục thành công[cite: 2]. | Form Functional Testing |
   | **CHK-CAT-10** | IA-03 | Categories | Sidebar Menu Item "Danh mục" | Kiểm tra trạng thái làm nổi bật (active) của mục menu "Danh mục" | Mục "Danh mục" trên Sidebar hiển thị màu xanh dương sáng (`text-blue-400`) đánh dấu trạng thái màn hình đang được chọn[cite: 1, 2]. | Visual Inspection |
   | **CHK-CAT-11** | IA-03 | Categories | Sidebar Menu Links | Kiểm tra khả năng điều hướng từ các tab khác về tab "Danh mục" | Khi click vào mục "Danh mục" từ tab khác trên Sidebar, giao diện hiển thị đúng màn hình Quản lý Danh mục[cite: 2]. | Interactive Testing |
   | **CHK-CAT-12** | IA-04 | Categories | Button "Xóa" trên bảng | Kiểm tra kích hoạt sự kiện xóa khi click nút "Xóa" trên từng dòng | Danh mục bị bấm xóa biến mât. | Interactive Testing |
   | **CHK-CAT-13** | IA-04 | Categories | Dữ liệu thêm mới phải đánh đúng số thứ tự | Thêm danh mục mới sau khi xóa 1 danh mục | Số thứ tự phải là số tiếp theo số thứ tự của danh mục cuối. | Interactive Testing |
   ---
--------------------------------------------------