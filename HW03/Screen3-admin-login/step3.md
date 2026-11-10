Dưới đây là xác định các tiêu chí đánh giá cho màn hình đăng nhập admin (Admin Login Screen) được phân loại theo 4 Interface Aspects (IA-01 đến IA-04), tuân thủ đúng các nguyên tắc đã đề ra (chưa tạo checklist items và không đánh giá Passed/Failed):

   ---

   ### IA-01: General UI Standards
   1. **Evaluation Aspect**: Bố cục tổng thể và tính thẩm mỹ giao diện màn hình đăng nhập (Layout structure and visual styling).
   2. **Reason for Evaluation**: Đảm bảo màn hình đăng nhập hiển thị căn giữa chính xác trên mọi khung nhìn (viewport), các thành phần thẻ (card), chữ viết và màu sắc tuân thủ thiết kế đồng bộ, chuyên nghiệp.
   3. **Related UI Components**: Container Tổng (Màn hình nền), Khung chứa Form đăng nhập (Login Card), Tiêu đề "Admin Login".
   4. **Verification Method**: Kiểm tra trực quan (Visual Inspection) trên trình duyệt kết hợp đối chiếu source code (`flex h-screen items-center justify-center bg-gray-100`, `bg-white p-8 rounded shadow-md w-96`)[cite: 1, 2].
   5. **Expected Behavior**: 
      * Màn hình nền có màu xám nhạt (`bg-gray-100`) và bao phủ toàn bộ chiều cao màn hình (`h-screen`)[cite: 1, 2].
      * Khung form đăng nhập dạng thẻ (card) màu trắng được căn chính xác ở chính giữa màn hình theo cả hai chiều (ngang và dọc)[cite: 1, 2].
      * Tiêu đề "Admin Login" hiển thị rõ ràng, đúng font chữ, kích thước lớn và in đậm (`text-2xl font-bold`)[cite: 1, 2].

   ---

   ### IA-02: Forms
   1. **Evaluation Aspect**: Tính năng nhập liệu, định dạng và tương tác của biểu mẫu đăng nhập (Input fields and form submission behavior).
   2. **Reason for Evaluation**: Form đăng nhập là cổng xác thực cốt lõi vào hệ thống quản trị, đòi hỏi các trường Text Box và Button hoạt động chính xác theo logic lập trình đã định nghĩa.
   3. **Related UI Components**: Ô nhập Email (Text Box), Ô nhập Mật khẩu (Text Box), Văn bản gợi ý (Placeholder Texts), Nút Đăng nhập (Button).
   4. **Verification Method**: Kiểm tra chức năng (Functional Testing) bằng cách tương tác trực tiếp trên các trường nhập liệu và nút bấm.
   5. **Expected Behavior**:
      * Ô nhập Email nhận dữ liệu ký tự từ bàn phím và cập nhật trực tiếp vào state `email`[cite: 1].
      * Ô nhập Mật khẩu định dạng `type="password"` để ẩn ký tự nhập thành dấu chấm/sao và cập nhật vào state `password`[cite: 1].
      * Văn bản gợi ý (Placeholder) hiển thị rõ các chữ "Email" và "Password" khi các trường chưa có dữ liệu[cite: 1, 2].
      * Nút Đăng nhập có màu xanh dương (`bg-blue-600`), khi được kích hoạt sẽ gọi hàm `handleLogin` gửi request POST tới API[cite: 1, 2].

   ---

   ### IA-03: Navigation
   1. **Evaluation Aspect**: Khả năng điều hướng bằng bàn phím và luồng tiêu điểm (Keyboard Navigation / Focus Flow).
   2. **Reason for Evaluation**: Đảm bảo người dùng có thể thao tác thuận tiện qua bàn phím (không bắt buộc dùng chuột), đáp ứng các tiêu chuẩn về khả năng sử dụng (usability) và accessibility.
   3. **Related UI Components**: Ô nhập Email, Ô nhập Mật khẩu, Nút Đăng nhập.
   4. **Verification Method**: Kiểm tra điều hướng bằng bàn phím (Keyboard Testing / Tab Key Navigation).
   5. **Expected Behavior**:
      * Khi người dùng nhấn phím `Tab`, thứ tự di chuyển tiêu điểm (focus order) phải theo đúng trình tự logic: từ Ô nhập Email $\rightarrow$ Ô nhập Mật khẩu $\rightarrow$ Nút Đăng nhập.
      * Cho phép kích hoạt nút Đăng nhập bằng cách nhấn phím `Enter` khi con trỏ đang ở trong form.

   ---

   ### IA-04: Feedback / State
   1. **Evaluation Aspect**: Cơ chế phản hồi trạng thái hệ thống và xử lý kết quả đăng nhập (System Feedback and Authentication States).
   2. **Reason for Evaluation**: Đảm bảo hệ thống cung cấp phản hồi trực quan và chính xác cho người dùng sau khi thực hiện hành động gửi thông tin đăng nhập.
   3. **Related UI Components**: Nút Đăng nhập, Trạng thái form đăng nhập.
   4. **Verification Method**: Kiểm tra hành vi phản hồi của hệ thống trong các kịch bản: đăng nhập thành công với quyền admin, đăng nhập sai thông tin, và đăng nhập bằng tài khoản không có quyền admin.
   5. **Expected Behavior**:
      * Khi đăng nhập thành công với tài khoản có `role === "admin"`, hệ thống lưu token vào `localStorage` và chuyển hướng giao diện[cite: 1].
      * Khi đăng nhập thất bại hoặc tài khoản không phải admin, hệ thống kích hoạt hộp thoại thông báo phản hồi (hiện tại code sử dụng `alert()` của trình duyệt)[cite: 1].

   ---

   ✨ **Step 3 đã hoàn tất.** Xin vui lòng review nội dung trên trước khi chúng ta chuyển sang bước tiếp theo!
--------------------------------------------------