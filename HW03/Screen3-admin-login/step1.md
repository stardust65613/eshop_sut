Dưới đây là phần phân tích chi tiết cho **Step 1** (Trang đăng nhập admin) dựa trên source code `src/App.jsx` và hình ảnh thực tế `admin_login.png`, tuân thủ đúng các nguyên tắc đã đề ra (không đánh giá Passed/Failed và chưa tạo checklist):

   ---

   ### 1. Cấu trúc Layout (Layout Structure)
   * **Container Tổng (Màn hình nền)**
     * **Location**: Toàn bộ khung nhìn (Viewport) của trình duyệt[cite: 2].
     * **Purpose**: Căn giữa form đăng nhập theo cả chiều ngang và chiều dọc, tạo không gian nền trung tính để làm nổi bật khu vực xác thực[cite: 2].
     * **Expected Behavior**: Sử dụng Flexbox (`flex h-screen items-center justify-center`) với màu nền xám nhạt (`bg-gray-100`)[cite: 1, 2].
     * **Evidence**: Source code `src/App.jsx` (`className="flex h-screen items-center justify-center bg-gray-100"`) và hình ảnh thực tế `admin_login.png`[cite: 1, 2].

   * **Khung chứa Form đăng nhập (Login Card)**
     * **Location**: Chính giữa màn hình[cite: 2].
     * **Purpose**: Gom nhóm các trường nhập liệu và nút bấm thành một khối thống nhất, trực quan[cite: 2].
     * **Expected Behavior**: Hiển thị dưới dạng thẻ (card) màu trắng (`bg-white`), có khoảng đệm bên trong (`p-8`), bo góc (`rounded`), hiệu ứng đổ bóng (`shadow-md`), và cố định chiều rộng (`w-96`)[cite: 1, 2].
     * **Evidence**: Source code `src/App.jsx` (`className="bg-white p-8 rounded shadow-md w-96"`) và `admin_login.png`[cite: 1, 2].

   ---

   ### 2. Các UI Components (UI Components)
   * **Tiêu đề (Heading - `<h2>`)**
     * **Location**: Phần trên cùng bên trong khung form đăng nhập[cite: 2].
     * **Purpose**: Xác định rõ mục đích hoặc ngữ cảnh của trang (Trang đăng nhập quản trị)[cite: 2].
     * **Expected Behavior**: Hiển thị văn bản "Admin Login" với kiểu chữ đậm và kích thước lớn (`text-2xl font-bold mb-4`)[cite: 1, 2].
     * **Evidence**: Source code `src/App.jsx` (`<h2 className="text-2xl font-bold mb-4">Admin Login</h2>`) và `admin_login.png`[cite: 1, 2].

   * **Văn bản gợi ý (Placeholder Texts)**
     * **Location**: Bên trong các ô input Email và Password[cite: 2].
     * **Purpose**: Hướng dẫn người dùng thông tin cần nhập vào từng trường[cite: 2].
     * **Expected Behavior**: Hiển thị chữ mờ "Email" và "Password" khi các trường chưa có dữ liệu[cite: 1, 2].
     * **Evidence**: Source code `src/App.jsx` (`placeholder="Email"`, `placeholder="Password"`) và `admin_login.png`[cite: 1, 2].

   ---

   ### 3. Các Thành Phần Tương Tác (Interactive Components)
   * **Ô nhập Email (Email Input - `<input>`)**
     * **Location**: Nằm ngay dưới tiêu đề "Admin Login"[cite: 2].
     * **Purpose**: Cho phép người dùng nhập địa chỉ email định danh tài khoản quản trị[cite: 1, 2].
     * **Expected Behavior**: Nhận ký tự từ bàn phím, cập nhật trực tiếp vào state `email` qua sự kiện `onChange`, có viền khung (`border p-2 mb-4 w-full`)[cite: 1].
     * **Evidence**: Source code `src/App.jsx` (`<input className="w-full border p-2 mb-4" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />`)[cite: 1].

   * **Ô nhập Mật khẩu (Password Input - `<input>`)**
     * **Location**: Nằm bên dưới ô nhập Email[cite: 1, 2].
     * **Purpose**: Cho phép người dùng nhập mật khẩu tài khoản một cách bảo mật[cite: 1, 2].
     * **Expected Behavior**: Định dạng `type="password"` để ẩn ký tự nhập thành dấu chấm/sao, cập nhật vào state `password` qua sự kiện `onChange`[cite: 1].
     * **Evidence**: Source code `src/App.jsx` (`<input className="w-full border p-2 mb-4" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />`)[cite: 1].

   * **Nút Đăng nhập (Login Button - `<button>`)**
     * **Location**: Nằm ở phía dưới cùng của form[cite: 1, 2].
     * **Purpose**: Gửi thông tin xác thực đến hệ thống backend[cite: 1].
     * **Expected Behavior**: Khi click hoặc nhấn Enter, gọi hàm `handleLogin` (gửi request POST tới `${API_URL}/login`). Nếu thành công và `role === "admin"`, hệ thống lưu token vào `localStorage` và chuyển giao diện; nếu thất bại hoặc không phải admin, hiển thị thông báo qua `alert()`[cite: 1]. Nút có màu xanh dương (`bg-blue-600 text-white p-2 rounded w-full`)[cite: 1, 2].
     * **Evidence**: Source code `src/App.jsx` (`<button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>` và logic hàm `handleLogin`)[cite: 1].

   ---

   ### 4. Các Thành Phần Điều Hướng (Navigation Components)
   * **Xác thực thực tế**: 
     * Tại giao diện này, **không tồn tại** các thành phần điều hướng sang trang khác (như Quên mật khẩu, Đăng ký tài khoản, hay Quay lại trang chủ).
     * **Evidence**: Code trong `src/App.jsx` của khối `if (!token)` chỉ bao gồm cấu trúc form đăng nhập độc lập[cite: 1].

   ---

   ### 5. Các Trạng Thái Giao Diện (Interface States)
   * **Trạng thái Mặc định (Initial State)**: Các ô input trống (`email = ""`, `password = ""`), hiển thị placeholder, nút Login ở trạng thái sẵn sàng tương tác[cite: 1, 2].
   * **Trạng thái Nhập liệu (Typing State)**: Ký tự hiển thị trong các ô input theo thao tác gõ bàn phím của người dùng.
   * **Trạng thái Lỗi / Đăng nhập thất bại (Error State)**: Khi thông tin không hợp lệ hoặc tài khoản không có quyền admin, hệ thống kích hoạt hộp thoại `alert()` của trình duyệt. Form giữ nguyên trạng thái, không có dòng thông báo lỗi trực quan (inline error message) trên UI[cite: 1].

   ---

   ### 6. Các Yếu Tố Ảnh Hưởng Đến Tính Usability (Usability Factors)
   * **Điểm mạnh**: 
     * Giao diện gọn gàng, tập trung hoàn toàn vào hành động cốt lõi (đăng nhập) giúp giảm thiểu phân tâm cho người dùng quản trị[cite: 2].
     * Nút Login nổi bật với màu xanh dương tiêu chuẩn[cite: 1, 2].
   * **Điểm hạn chế / Tiềm ẩn rủi ro Usability**:
     * **Phản hồi người dùng kém hiện đại**: Sử dụng `alert()` mặc định của trình duyệt khi đăng nhập thất bại, làm gián đoạn trải nghiệm người dùng[cite: 1].
     * **Thiếu tính năng hỗ trợ**: Không có nút hiển thị/ẩn mật khẩu (Show/Hide password), không có checkbox "Nhớ tài khoản" (Remember me), và thiếu liên kết "Quên mật khẩu?"[cite: 1].
     * **Sử dụng Placeholder thay vì Label**: Việc chỉ dùng placeholder trong ô input mà không có thẻ `<label>` tường minh có thể gây bất tiện (placeholder biến mất khi người dùng bắt đầu gõ hoặc khi click vào ô input)[cite: 1, 2].

   ---

   ### 7. Các Vấn Đề Tiềm Ẩn Về Accessibility và Responsive Design
   * **Accessibility (Khả năng tiếp cận - a11y)**:
     * Các trường `<input>` **thiếu thuộc tính `aria-label` hoặc `id` liên kết với thẻ `<label>`**, gây khó khăn cho các công cụ hỗ trợ người khuyết tật (như Screen Readers) nhận biết mục đích của ô nhập[cite: 1].
     * Thiếu định nghĩa rõ ràng về trạng thái `:focus` tùy chỉnh bằng CSS (đang phụ thuộc hoàn toàn vào outline mặc định của trình duyệt)[cite: 1].
   * **Responsive Design (Thiết kế đáp ứng)**:
     * Khung đăng nhập sử dụng chiều rộng cố định (`w-96`), điều này hiển thị tốt trên màn hình lớn (desktop), nhưng cần kiểm tra kỹ trên các thiết bị di động màn hình nhỏ (ví dụ: màn hình dưới 384px) để tránh hiện tượng tràn viền hoặc mất cân đối lề[cite: 1].
--------------------------------------------------