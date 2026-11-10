Dưới đây là phần phân loại các UI Controls (Classify UI Controls) cho trang **Quản lý Danh mục (Categories)** dựa trên các thành phần đã được phân tích ở bước trước:

   ---

   ### Bảng phân loại UI Controls

   | STT | Tên Component | Loại Control | Lý do phân loại |
   | :--- | :--- | :--- | :--- |
   | 1 | **Ô nhập liệu Tên danh mục mới** (`<input type="text">`) | **Text Box** | Cho phép người dùng nhập dữ liệu dạng văn bản tự do (tên của danh mục mới cần thêm) từ bàn phím. |
   | 2 | **Nút "Thêm mới"** (`<button>Thêm mới</button>`) | **Button** | Là nút bấm tương tác, khi người dùng click sẽ kích hoạt sự kiện gửi form (`handleCategorySubmit`) để tạo danh mục. |
   | 3 | **Bảng danh sách danh mục** (`<table>`) | **Grid Control** | Trình bày dữ liệu dạng bảng lưới gồm các hàng và cột rõ ràng (Cột ID, Tên Danh Mục, Hành động) để hiển thị danh sách các bản ghi danh mục. |
   | 4 | **Nút "Xóa"** trong bảng (`<button>Xóa</button>`) | **Button** | Là nút bấm hành động gắn liền với mỗi dòng dữ liệu trong Grid, khi click sẽ gọi API xóa danh mục tương ứng. |
   | 5 | **Các mục điều hướng Sidebar** (*Dashboard, Danh mục, Sản phẩm, Mã Giảm Giá, Đơn hàng, Người dùng, Đăng xuất*) | **Ghi nhận riêng** (Navigation List Items / Interactive Elements) | Các thẻ `<li>` được gán sự kiện `onClick` để chuyển đổi tab hoặc đăng xuất, không thuộc các control biểu mẫu chuẩn nhưng đóng vai trò là các thành phần điều hướng tương tác. |

   ---

   > **Dừng và chờ review**: Tôi đã hoàn thành việc phân loại các UI Controls cho trang Quản lý Danh mục theo đúng yêu cầu của **Step 2**. Xin vui lòng review kết quả trên trước khi chúng ta chuyển sang bước tiếp theo.  
--------------------------------------------------