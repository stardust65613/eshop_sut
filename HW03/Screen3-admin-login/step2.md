Dưới đây là phần phân loại các thành phần giao diện (UI Controls) cho trang đăng nhập admin dựa trên kết quả phân tích ở Step 1, tuân thủ đúng các nguyên tắc đã đề ra:

   ---

   ### I. Các UI Controls thuộc danh mục chuẩn

   1. **Text Box**
      * **Các component bao gồm**: Ô nhập Email, Ô nhập Mật khẩu[cite: 1].
      * **Lý do phân loại**: Đây là các thành phần cho phép người dùng nhập, chỉnh sửa và tương tác trực tiếp bằng văn bản từ bàn phím (địa chỉ email định danh và mật khẩu bảo mật)[cite: 1].

   2. **Button**
      * **Các component bao gồm**: Nút Đăng nhập (`Login` button)[cite: 1].
      * **Lý do phân loại**: Đây là thành phần tương tác dạng nút bấm để kích hoạt hành động gửi yêu cầu xác thực (`handleLogin`) khi người dùng click[cite: 1].

   ---

   ### II. Các thành phần khác (Ghi nhận riêng)
   *Các thành phần dưới đây không thuộc các danh mục control tương tác chuẩn được yêu cầu, nhưng đóng vai trò cấu trúc và hiển thị quan trọng trên giao diện:*

   1. **Container / Layout Container (Container Tổng - Màn hình nền)**
      * **Lý do ghi nhận**: Là khung nhìn tổng thể sử dụng Flexbox để bao bọc và căn giữa toàn bộ giao diện màn hình[cite: 1, 2].
   2. **Card / Panel (Khung chứa Form đăng nhập)**
      * **Lý do ghi nhận**: Là khối giao diện dạng thẻ (Card) chứa các trường nhập và nút bấm, tạo ranh giới trực quan cho form đăng nhập[cite: 1, 2].
   3. **Heading / Static Text (Tiêu đề "Admin Login")**
      * **Lý do ghi nhận**: Là văn bản tĩnh mang tính chất mô tả và định danh ngữ cảnh của trang[cite: 1, 2].
   4. **Placeholder Text (Văn bản gợi ý "Email", "Password")**
      * **Lý do ghi nhận**: Là thuộc tính văn bản hiển thị mờ bên trong các Text Box nhằm hướng dẫn người dùng nội dung cần nhập[cite: 1, 2].

   ---

   ✨ **Step 2 đã hoàn tất.** Xin vui lòng review nội dung trên trước khi chúng ta chuyển sang bước tiếp theo!
--------------------------------------------------