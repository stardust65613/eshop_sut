Dưới đây là phần phân tích chi tiết cho trang **Quản lý Danh mục (Categories)** dựa trên source code (`App.jsx`) và hình ảnh thực tế (`admin_category.png`) theo đúng các yêu cầu của **Step 1**.

   ---

   ### 1. Cấu trúc Layout (Layout Structure)
   *   **Layout chính**: Sử dụng bố cục phân tách theo dạng Dashboard hai cột (Flexbox container `flex h-screen bg-gray-50`):
       *   **Cột bên trái (Sidebar)**: Chiều rộng cố định (`w-64`), nền tối (`bg-gray-800`), chứa tiêu đề hệ thống và các menu điều hướng chức năng.
       *   **Cột bên phải (Main Content Area)**: Chiếm phần không gian còn lại (`flex-1 p-8 overflow-auto`), chứa nội dung quản lý danh mục (`Quản lý Danh mục`).

   ---

   ### 2. Các UI Components & Chi tiết thành phần
   Theo yêu cầu, mỗi component được ghi rõ theo cấu trúc: Component, Location, Purpose, Expected Behavior, Evidence.

   #### 2.1. Sidebar Navigation
   *   **Component**: `Sidebar Panel & Menu List`
       *   **Location**: Cột bên trái màn hình (`w-64 bg-gray-800`).
       *   **Purpose**: Hiển thị menu điều hướng chung cho trang quản trị Admin.
       *   **Expected Behavior**: Các mục menu thay đổi màu sắc khi hover hoặc active; nhấp vào mục nào sẽ chuyển tab giao diện tương ứng. Mục "Danh mục" đang ở trạng thái active (màu xanh dương sáng).
       *   **Evidence**: Source code `App.jsx` (`<div className="w-64 bg-gray-800 text-white p-4 overflow-y-auto">`) và screenshot `admin_category.png`.

   #### 2.2. Page Header
   *   **Component**: `Page Title (Quản lý Danh mục)`
       *   **Location**: Phía trên cùng bên trái của vùng nội dung chính.
       *   **Purpose**: Xác định tiêu đề chức năng hiện tại mà người quản trị đang thao tác.
       *   **Expected Behavior**: Hiển thị rõ ràng chữ "Quản lý Danh mục" với định dạng tiêu đề lớn (font-bold, text-2xl).
       *   **Evidence**: Source code `App.jsx` (`<h2 className="text-2xl font-bold mb-6">Quản lý Danh mục</h2>`) và screenshot `admin_category.png`.

   #### 2.3. Add Category Form
   *   **Component**: `Form thêm mới danh mục`
       *   **Location**: Nằm ngay dưới tiêu đề trang, phía trên bảng dữ liệu.
       *   **Purpose**: Cung cấp ô nhập liệu và nút bấm để người dùng thêm mới một danh mục sản phẩm.
       *   **Expected Behavior**: Bao gồm một ô input (`type="text"`) với placeholder *"Tên danh mục mới"* và một nút submit *"Thêm mới"*. Khi nhập tên và bấm nút, form gọi hàm `handleCategorySubmit` để gửi API tạo danh mục, sau đó làm sạch ô input và làm mới danh sách.
       *   **Evidence**: Source code `App.jsx` (`<form onSubmit={handleCategorySubmit} ...>`) và screenshot `admin_category.png`.

   #### 2.4. Categories Data Table
   *   **Component**: `Bảng danh sách danh mục (Table)`
       *   **Location**: Chiếm phần lớn diện tích bên dưới form thêm mới.
       *   **Purpose**: Liệt kê toàn bộ các danh mục hiện có trong hệ thống dưới dạng bảng trực quan.
       *   **Expected Behavior**: Bảng có nền trắng, bo góc, đổ bóng nhẹ, header màu xám (`bg-gray-200`) với các cột: **ID**, **Tên Danh Mục**, **Hành động**. Các dòng dữ liệu cách nhau bởi đường viền dưới (`border-b`).
       *   **Evidence**: Source code `App.jsx` (`<table className="w-full bg-white shadow rounded text-left">`) và screenshot `admin_category.png` hiển thị các bản ghi mẫu (`#1 - Điện thoại`, `#2 - Laptop`, `#3 - Phụ kiện`).

   ---

   ### 3. Các thành phần tương tác (Interactive Elements)
   *   **Ô nhập liệu Tên danh mục mới**: 
       *   *Expected Behavior*: Cho phép nhập chuỗi văn bản (tên danh mục). Giá trị được lưu vào state `categoryName`.
   *   **Nút "Thêm mới" (Add Button)**:
       *   *Expected Behavior*: Nút màu xanh dương (`bg-blue-600 text-white`). Khi người dùng click, kích hoạt sự kiện submit form, gửi dữ liệu `POST /categories` tới API.
   *   **Nút "Xóa" (Delete Button)**:
       *   *Expected Behavior*: Nút màu đỏ (`bg-red-500 text-white px-2 py-1 rounded text-sm`) nằm trong cột "Hành động" của mỗi hàng. Khi click, gọi hàm `deleteCategory(c.id)` để thực hiện yêu cầu xóa danh mục tương ứng qua API và cập nhật lại danh sách.

   ---

   ### 4. Các thành phần điều hướng (Navigation Elements)
   *   **Menu điều hướng bên trái (Sidebar Tabs)**: 
       *   Các mục: *Dashboard*, *Danh mục* (đang chọn), *Sản phẩm*, *Mã Giảm Giá*, *Đơn hàng*, *Người dùng*, *Đăng xuất*. Cho phép chuyển đổi qua lại giữa các màn hình quản trị khác nhau.

   ---

   ### 5. Các trạng thái giao diện (UI States)
   *   **Trạng thái bình thường (Default State)**: Hiển thị tiêu đề, form thêm danh mục trống, và bảng danh sách dữ liệu danh mục hiện tại (như dữ liệu mẫu `#1 Điện thoại`, `#2 Laptop`, `#3 Phụ kiện`).
   *   **Trạng thái tương tác/Hover**: Các mục menu bên sidebar đổi màu khi rê chuột vào (`hover:text-blue-300`). (Lưu ý: Source code hiện tại không định nghĩa rõ hiệu ứng hover cụ thể cho các nút Thêm mới hay Xóa ngoài các class màu sắc tĩnh).

   ---

   ### 6. Các yếu tố ảnh hưởng đến tính Usability (Tính khả dụng)
   *   **Ưu điểm**: 
       *   Giao diện gọn gàng, bố cục rõ ràng phân tách rõ giữa khu vực điều hướng, khu vực nhập liệu và khu vực hiển thị dữ liệu.
       *   Placeholder hướng dẫn rõ ràng ("Tên danh mục mới").
       *   Màu sắc nút bấm mang tính quy ước trực quan (Xanh dương cho hành động thêm/lưu, Đỏ cho hành động hủy/xóa).
   *   **Điểm hạn chế tiềm ẩn**:
       *   Chức năng xóa danh mục (`deleteCategory`) gọi trực tiếp API xóa mà **không có hộp thoại xác nhận (Confirmation Dialog)**, dẫn đến việc người dùng bấm nhầm gây mất dữ liệu.
       *   Thông báo lỗi phụ thuộc hoàn toàn vào hàm `alert()` của trình duyệt, trải nghiệm người dùng chưa hiện đại (chưa có toast notification).

   ---

   ### 7. Các vấn đề tiềm ẩn về Accessibility và Responsive Design
   *   **Accessibility (A11y)**: 
       *   Thẻ `<input>` thiếu thuộc tính `aria-label` hoặc thẻ `<label>` tường minh gắn kết với input (ngoại trừ placeholder trực quan).
       *   Độ tương phản màu sắc của nút xóa chữ trắng trên nền đỏ và nút thêm chữ trắng trên nền xanh dương đạt chuẩn, tuy nhiên các icon/nút bấm thiếu thuộc tính hỗ trợ đọc màn hình cho người khiếm thị.
   *   **Responsive Design**: 
       *   Sidebar có chiều rộng cố định (`w-64`) và không có cơ chế thu gọn (collapsible sidebar) hay nút menu hamburger trên màn hình nhỏ (mobile/tablet), dẫn đến việc giao diện có thể bị tràn hoặc mất không gian hiển thị khi xem trên màn hình độ phân giải thấp.

   ---
--------------------------------------------------