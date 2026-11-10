Dưới đây là bảng GUI Checklist Items được chuyển đổi từ các tiêu chí đánh giá đã được phê duyệt ở Step 4, tuân thủ đúng định dạng và các nguyên tắc đã đề ra (chưa đánh giá kết quả Passed/Failed):

   ---

   | ID | IA | Screen | Component | Checklist Item | Expected Result | Verification Method |
   | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
   | **CHK-01** | IA-01 | Admin Login Screen | Container Tổng (Màn hình nền) | Kiểm tra màu nền và chiều cao tổng thể của khung nhìn viewport. | Màn hình có màu xám nhạt (`bg-gray-100`) và bao phủ toàn bộ chiều cao màn hình (`h-screen`)[cite: 1, 2]. | Kiểm tra trực quan (Visual Inspection)[cite: 1, 2] |
   | **CHK-02** | IA-01 | Admin Login Screen | Khung chứa Form đăng nhập (Login Card) | Kiểm tra kích thước, màu sắc, bo góc, hiệu ứng đổ bóng và vị trí căn giữa của thẻ khung form. | Thẻ form có màu trắng (`bg-white`), chiều rộng cố định (`w-96`), bo góc (`rounded`), đổ bóng (`shadow-md`), khoảng đệm (`p-8`), và được căn chính xác ở giữa màn hình[cite: 1, 2]. | Kiểm tra trực quan (Visual Inspection)[cite: 1, 2] |
   | **CHK-03** | IA-01 | Admin Login Screen | Tiêu đề "Admin Login" | Kiểm tra định dạng kiểu chữ và kích thước của tiêu đề form. | Tiêu đề hiển thị chữ "Admin Login" với kích thước lớn và in đậm (`text-2xl font-bold`)[cite: 1, 2]. | Kiểm tra trực quan (Visual Inspection)[cite: 1, 2] |
   | **CHK-04** | IA-02 | Admin Login Screen | Ô nhập Email (Text Box) | Kiểm tra văn bản gợi ý (placeholder) và khả năng nhận dữ liệu của ô email. | Hiển thị placeholder "Email" khi ô trống; cho phép nhập và cập nhật ký tự vào state `email`[cite: 1]. | Kiểm tra chức năng (Functional Testing)[cite: 1] |
   | **CHK-05** | IA-02 | Admin Login Screen | Ô nhập Mật khẩu (Text Box) | Kiểm tra định dạng ẩn ký tự bảo mật, placeholder và khả năng nhận dữ liệu của ô mật khẩu. | Hiển thị placeholder "Password" khi ô trống; định dạng `type="password"` ẩn ký tự thành dấu chấm/sao và cập nhật vào state `password`[cite: 1]. | Kiểm tra chức năng (Functional Testing)[cite: 1] |
   | **CHK-06** | IA-02 | Admin Login Screen | Nút Đăng nhập (Button) | Kiểm tra giao diện và hành động kích hoạt nút Đăng nhập. | Nút có màu xanh dương (`bg-blue-600 text-white`), khi click gọi hàm `handleLogin` gửi request POST tới API xác thực[cite: 1, 2]. | Kiểm tra chức năng (Functional Testing)[cite: 1, 2] |
   | **CHK-07** | IA-03 | Admin Login Screen | Ô nhập Email, Ô nhập Mật khẩu, Nút Đăng nhập | Kiểm tra thứ tự di chuyển tiêu điểm (focus order) bằng bàn phím. | Nhấn phím `Tab` di chuyển tiêu điểm theo đúng thứ tự: Ô nhập Email $\rightarrow$ Ô nhập Mật khẩu $\rightarrow$ Nút Đăng nhập[cite: 1]. | Kiểm tra bàn phím (Keyboard Testing)[cite: 1] |
   | **CHK-08** | IA-03 | Admin Login Screen | Nút Đăng nhập (Button) / Form | Kiểm tra khả năng kích hoạt form đăng nhập bằng phím `Enter`. | Nhấn phím `Enter` khi con trỏ đang ở trong form kích hoạt hành động đăng nhập tương tự như click nút Login[cite: 1]. | Kiểm tra bàn phím (Keyboard Testing)[cite: 1] |
   | **CHK-09** | IA-04 | Admin Login Screen | Nút Đăng nhập (Button) / Hệ thống | Kiểm tra phản hồi hệ thống khi đăng nhập thành công với tài khoản quản trị (admin). | Hệ thống lưu token vào `localStorage` và chuyển hướng giao diện thành công[cite: 1]. | Kiểm tra phản hồi (Functional Testing)[cite: 1] |
   | **CHK-10** | IA-04 | Admin Login Screen | Nút Đăng nhập (Button) / Hệ thống | Kiểm tra phản hồi hệ thống khi đăng nhập thất bại hoặc tài khoản không có quyền admin. | Hệ thống kích hoạt hộp thoại `alert()` thông báo lỗi hoặc không đủ quyền, giữ nguyên form đăng nhập[cite: 1]. | Kiểm tra phản hồi (Functional Testing)[cite: 1] |

   ---

   ✨ **Step 4 đã hoàn tất.** Xin vui lòng review danh sách checklist trên!
--------------------------------------------------