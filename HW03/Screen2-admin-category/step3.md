--------------------------------------------------
   Dựa trên kết quả phân tích GUI và source code của trang **Quản lý Danh mục (Categories)**[cite: 1, 2], dưới đây là các tiêu chí cần đánh giá được phân loại theo bốn Interface Aspects (IA):

   ---

   ### IA-01: General UI Standards (Tiêu chuẩn UI chung)
   1. **Evaluation Aspect**: Tính đồng bộ về bố cục, kiểu chữ, khoảng cách và định dạng trực quan của màn hình quản lý danh mục.
   2. **Reason for Evaluation**: Đảm bảo form thêm mới danh mục và bảng danh sách tuân thủ thiết kế giao diện chung của hệ thống Admin (sử dụng Tailwind CSS), mang lại trải nghiệm thị giác nhất quán[cite: 1, 2].
   3. **Related UI Components**: Tiêu đề trang ("Quản lý Danh mục"), form thêm mới danh mục, và bảng dữ liệu danh mục (`<table>`)[cite: 1, 2].
   4. **Verification Method**: Kiểm tra trực quan (Visual Inspection) trên giao diện thực tế (`admin_category.png`) và đối chiếu các class CSS trong source code (`App.jsx`)[cite: 1, 2].
   5. **Expected Behavior**: Tiêu đề hiển thị nổi bật dạng chữ đậm (`text-2xl font-bold mb-6`); bố cục chia rõ ràng giữa form nhập liệu ở trên và bảng danh sách ở dưới; bảng hiển thị các hàng có đường viền dưới (`border-b`) và header xám (`bg-gray-200`)[cite: 1, 2].

   ---

   ### IA-02: Forms (Biểu mẫu)
   1. **Evaluation Aspect**: Tính hợp lệ và xử lý dữ liệu đầu vào của biểu mẫu thêm mới danh mục.
   2. **Reason for Evaluation**: Đảm bảo ô nhập tên danh mục hoạt động chính xác, nhận diện giá trị văn bản người dùng nhập và gửi yêu cầu tạo danh mục lên hệ thống[cite: 2].
   3. **Related UI Components**: Ô nhập liệu tên danh mục (`input type="text"`, placeholder "Tên danh mục mới") và nút "Thêm mới" (`<button>`)[cite: 1, 2].
   4. **Verification Method**: Kiểm tra chức năng biểu mẫu (Form Functional Testing) thông qua việc nhập dữ liệu hợp lệ, để trống hoặc nhập chuỗi ký tự đặc biệt[cite: 2].
   5. **Expected Behavior**: Cho phép nhập chuỗi tên danh mục vào ô input; khi click nút "Thêm mới", form gọi hàm `handleCategorySubmit` gửi request tạo danh mục, sau đó ô input được làm sạch (`setCategoryName("")`) và danh sách được cập nhật lại từ API[cite: 2].

   ---

   ### IA-03: Navigation (Điều hướng & Tương tác dòng dữ liệu)
   1. **Evaluation Aspect**: Khả năng chuyển đổi qua lại giữa các tab chức năng quản trị và tương tác điều hướng hành động trên danh sách danh mục.
   2. **Reason for Evaluation**: Đảm bảo người quản trị có thể dễ dàng truy cập màn hình quản lý danh mục từ sidebar và thực hiện thao tác xóa danh mục ngay trên bảng dữ liệu[cite: 1, 2].
   3. **Related UI Components**: Mục "Danh mục" trên Sidebar menu và nút "Xóa" trong cột "Hành động" của bảng danh mục[cite: 1, 2].
   4. **Verification Method**: Kiểm tra tương tác (Interactive Testing) bằng cách click vào các mục menu sidebar và nút xóa trên bảng[cite: 1, 2].
   5. **Expected Behavior**: Khi click vào mục "Danh mục" trên sidebar, tab active chuyển sang màn hình quản lý danh mục (được đánh dấu nổi bật với màu xanh dương `text-blue-400`); khi click nút "Xóa" trên một dòng danh mục, hàm `deleteCategory(c.id)` được kích hoạt để xóa bản ghi tương ứng qua API[cite: 2].

   ---

   ### IA-04: Feedback / State (Phản hồi hệ thống & Trạng thái)
   1. **Evaluation Aspect**: Khả năng phản hồi của hệ thống khi thực hiện các tác vụ thêm hoặc xóa danh mục.
   2. **Reason for Evaluation**: Đảm bảo người dùng nhận được thông báo phản hồi khi thao tác thành công hoặc phát sinh lỗi từ phía máy chủ[cite: 2].
   3. **Related UI Components**: Trạng thái giao diện của bảng khi danh mục thay đổi và thông báo lỗi hệ thống (`alert`)[cite: 2].
   4. **Verification Method**: Kiểm tra trạng thái UI và thông báo (State & Feedback Testing) bằng cách thực hiện thêm/xóa danh mục và giả lập lỗi API[cite: 2].
   5. **Expected Behavior**: Sau khi thêm hoặc xóa danh mục thành công, dữ liệu bảng được tự động làm mới (`fetchData()`) để phản ánh trạng thái mới nhất; nếu xảy ra lỗi trong quá trình thực hiện, thông báo lỗi được hiển thị qua hộp thoại (`alert("Lỗi thêm DM: " + err.message)`)[cite: 2].  
--------------------------------------------------