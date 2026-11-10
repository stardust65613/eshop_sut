Dưới đây là kết quả phân tích chi tiết trang quản lý sản phẩm (**Products**) dựa trên source code (`frontend-admin.md`), stylesheet (`index.css`) và giao diện thực tế (`admin_product.png`) theo đúng yêu cầu của **Step 1**.

---

### 1. Cấu trúc Layout (Layout Structure)
* **Sidebar Điều hướng Trái (Navigation Sidebar)**: Chiếm toàn bộ chiều cao màn hình ở phía bên trái (`w-64 bg-gray-800 text-white p-4`). Chứa logo/tên hệ thống "EShop Admin" và danh sách các liên kết chuyển tab[cite: 1, 2].
* **Vùng Nội dung Chính (Main Content Area)**: Chiếm phần diện tích còn lại bên phải (`flex-1 p-8 overflow-auto`), hiển thị tiêu đề trang "Quản lý Sản phẩm" và các khối chức năng con theo chiều dọc[cite: 1, 2].
* **Khung Import sản phẩm từ CSV**: Khối chứa nền xanh nhạt nằm ở phần trên cùng của trang quản lý sản phẩm, dùng cho tính năng nhập liệu hàng loạt[cite: 1, 2].
* **Form Thêm/Sửa Sản Phẩm**: Khối khung trắng nằm ở giữa trang, bố trí các trường nhập liệu theo dạng lưới (Grid) 2 cột[cite: 1, 2].
* **Bảng Danh Sách Sản Phẩm**: Nằm ở phần dưới cùng của trang, hiển thị danh sách dạng bảng (Table) với các cột thông tin và nút thao tác[cite: 1, 2].

---

### 2. Các UI Components, Thành phần Tương tác và Điều hướng

#### a. Sidebar Menu (Thành phần Điều hướng)
* **Component**: Danh sách liên kết menu điều hướng.
* **Location**: Cột bên trái (`w-64 bg-gray-800...`)[cite: 1, 2].
* **Purpose**: Điều hướng qua lại giữa các module quản trị (Dashboard, Danh mục, Sản phẩm, Mã Giảm Giá, Đơn hàng, Người dùng, Đăng xuất)[cite: 2].
* **Expected Behavior**: Khi người dùng click vào mục "Sản phẩm", trạng thái `activeTab` chuyển thành `"products"`, mục menu được highlight màu xanh dương (`text-blue-400`), đồng thời render nội dung trang quản lý sản phẩm tương ứng[cite: 2].
* **Evidence**: Hình ảnh `admin_product.png` (mục "Sản phẩm" đang sáng màu xanh) và source code `frontend-admin.md` (hàm `setActiveTab("products")`)[cite: 1, 2].

#### b. Khung Import Sản Phẩm từ CSV (UI Component & Interactive)
* **Component**: Khối chức năng Import CSV (`bg-blue-50 border border-blue-200 rounded p-4 mb-6`)[cite: 2].
* **Location**: Phía trên cùng của vùng nội dung quản lý sản phẩm[cite: 1, 2].
* **Purpose**: Hỗ trợ admin tải file mẫu, chọn file CSV từ máy tính, xem trước dữ liệu (preview) và import hàng loạt sản phẩm vào cơ sở dữ liệu[cite: 2].
* **Expected Behavior**:
  * Click vào link "Tải file mẫu (template.csv)" sẽ tải xuống file mẫu định dạng CSV[cite: 2].
  * Chọn file qua input `type="file"` sẽ kích hoạt `FileReader` đọc nội dung, parse dữ liệu thành các dòng và hiển thị bảng xem trước (preview table) cùng số lượng dòng[cite: 2].
  * Nút "Import X sản phẩm" cập nhật số lượng động theo file, khi click sẽ gọi API `POST /admin/import-products`, hiển thị trạng thái "Đang import..." và trả về thông báo thành công hoặc danh sách lỗi chi tiết[cite: 2].
* **Evidence**: `admin_product.png` (khối xanh "Import sản phẩm từ CSV", nút "Choose File" và nút "Import 0 sản phẩm") và source code `frontend-admin.md`[cite: 1, 2].

#### c. Form Thêm/Sửa Sản Phẩm (UI Component & Interactive)
* **Component**: Khung form nhập liệu sản phẩm (`bg-white p-4 rounded shadow mb-6 space-y-4`)[cite: 2].
* **Location**: Nằm ở giữa trang, bên dưới khối Import CSV[cite: 1, 2].
* **Purpose**: Cho phép admin nhập thông tin để tạo mới sản phẩm hoặc chỉnh sửa thông tin sản phẩm đang có[cite: 2].
* **Expected Behavior**:
  * Tiêu đề form thay đổi linh hoạt: hiển thị "Thêm sản phẩm mới" khi ở chế độ tạo mới, hoặc "Sửa sản phẩm" khi được nạp dữ liệu từ bảng[cite: 2].
  * Các trường nhập liệu bao gồm: Tên sản phẩm (text, bắt buộc), Giá tiền (number), URL Ảnh (text, trải dài 2 cột), Mô tả (textarea, trải dài 2 cột), Danh mục (select dropdown lấy từ danh sách categories)[cite: 2].
  * Nút "Lưu sản phẩm" (màu xanh lá): Gửi request `POST /products` (nếu thêm mới) hoặc `PUT /products/:id` (nếu cập nhật)[cite: 2].
  * Nút "Hủy sửa" (chỉ xuất hiện khi đang ở chế độ sửa sản phẩm): Dùng để reset form về trạng thái thêm mới[cite: 2].
* **Evidence**: `admin_product.png` (các ô input, select box danh mục "Điện thoại", nút "Lưu sản phẩm") và source code `frontend-admin.md`[cite: 1, 2].

#### d. Bảng Danh Sách Sản Phẩm (UI Component)
* **Component**: Bảng dữ liệu sản phẩm (`table` dạng lưới)[cite: 2].
* **Location**: Phần dưới cùng của giao diện quản lý sản phẩm[cite: 1, 2].
* **Purpose**: Liệt kê toàn bộ sản phẩm hiện có, hiển thị trực quan hình ảnh thu nhỏ, tên, giá bán và cung cấp các nút thao tác nhanh[cite: 2].
* **Expected Behavior**:
  * Cột "Ảnh": Hiển thị ảnh thu nhỏ (`w-12 h-12 object-cover`). Nếu link ảnh bị lỗi (`onError`), tự động chuyển sang ảnh thay thế từ `placehold.co/50`[cite: 2].
  * Cột "Tên SP" và "Giá": Hiển thị tên và giá tiền kèm đơn vị `₫`[cite: 2].
  * Cột "Hành động": Chứa 2 nút tương tác:
    * Nút "Sửa" (màu vàng): Đưa dữ liệu sản phẩm dòng đó lên form phía trên để chỉnh sửa[cite: 2].
    * Nút "Xóa" (màu đỏ): Gọi API `DELETE /products/:id` để xóa sản phẩm khỏi cơ sở dữ liệu[cite: 2].
* **Evidence**: `admin_product.png` (bảng hiển thị sản phẩm "iPhone 15 Pro Max", giá "30000000 ₫", nút Sửa/Xóa màu vàng và đỏ) và source code `frontend-admin.md`[cite: 1, 2].

---

### 3. Các Trạng thái Giao diện (Interface States)
* **Trạng thái Mặc định (Default State)**: Trang hiển thị danh sách sản phẩm hiện tại, form thêm sản phẩm để trống, khối Import ở trạng thái chưa chọn file (`No file chosen`, nút import hiển thị "Import 0 sản phẩm").
* **Trạng thái Xem trước File CSV (Preview State)**: Sau khi chọn file CSV hợp lệ, bảng xem trước dữ liệu (`overflow-x-auto max-h-40`) xuất hiện, hiển thị các hàng dữ liệu thô và cập nhật số lượng trên nút Import.
* **Trạng thái Đang Xử lý (Loading/Importing State)**: Khi người dùng bấm nút Import, nút chuyển sang trạng thái `disabled` và đổi nhãn thành "Đang import...".
* **Trạng thái Kết quả (Result State)**: Hiển thị hộp thông báo kết quả (màu xanh lá khi thành công, màu đỏ khi có lỗi hoặc hiển thị chi tiết các dòng lỗi).
* **Trạng thái Thêm mới vs. Sửa (Add vs. Edit Mode)**: Phân biệt dựa trên `product.id`. Chế độ thêm mới có nút "Lưu sản phẩm", chế độ sửa có thêm nút "Hủy sửa" và tiêu đề form đổi thành "Sửa sản phẩm".
* **Trạng thái Fallback Hình ảnh**: Khi thumbnail sản phẩm không tải được, hiển thị ảnh mặc định (`placehold.co/50`) để tránh lỗi vỡ khung hình[cite: 2].

---

### 4. Các Yếu tố Ảnh hưởng đến Tính Usability (Usability Factors)
* **Điểm tích cực (Positive Usability)**:
  * Có sẵn liên kết tải file mẫu (`template.csv`) trực tiếp qua Data URI giúp người dùng nhanh chóng biết cấu trúc dữ liệu yêu cầu[cite: 2].
  * Cơ chế xem trước (preview) dữ liệu CSV giúp admin kiểm tra tính chính xác của dữ liệu trước khi đẩy lên server.
  * Phân định màu sắc trực quan cho các nhóm nút chức năng (Xanh lá: Thêm/Lưu, Xanh dương: Import, Vàng: Sửa, Đỏ: Xóa).
  * Cơ chế xử lý lỗi ảnh (`onError`) giúp giao diện bảng luôn chỉn chu ngay cả khi URL ảnh từ nguồn ngoài bị hỏng[cite: 2].
* **Điểm hạn chế / Rủi ro Usability**:
  * Trường "Giá tiền" trong form thêm/sửa sử dụng kiểu `<input type="number">` nhưng thiếu ký hiệu đơn vị (`₫`) bên trong hoặc bên cạnh ô nhập, dễ gây mơ hồ về đơn vị tiền tệ.
  * Thao tác nhấn nút "Xóa" trên bảng sản phẩm gọi trực tiếp lệnh xóa (`axios.delete`) mà **không có hộp thoại xác nhận (Confirmation Dialog)**, dẫn đến việc admin bấm nhầm và xóa dữ liệu ngoài ý muốn[cite: 2].

---

### 5. Các Vấn đề Tiềm ẩn về Accessibility (A11y) và Responsive Design
* **Accessibility (A11y)**:
  * Các trường input trong form thêm/sửa sản phẩm (`<input>`, `<textarea>`, `<select>`) thiếu các thẻ `<label>` liên kết tường minh qua thuộc tính `htmlFor`/`id`, gây khó khăn cho người dùng sử dụng trình đọc màn hình (Screen Reader).
  * Các nút hành động (Sửa, Xóa) trong bảng sản phẩm chỉ phân biệt bằng màu sắc (vàng, đỏ) mà thiếu nhãn văn bản bổ trợ hoặc thuộc tính `aria-label`, gây khó khăn cho người bị mù màu (color blindness).
  * Input chọn file (`<input type="file">`) mặc định của trình duyệt khó tùy biến giao diện và thiếu chỉ dẫn ngữ nghĩa rõ ràng cho các công cụ hỗ trợ tiếp cận.
* **Responsive Design**:
  * Bảng dữ liệu sản phẩm (`table`) và bảng xem trước CSV có áp dụng lớp cuộn ngang (`overflow-x-auto`), giúp hiển thị trên màn hình nhỏ không bị tràn khung. Tuy nhiên, trên thiết bị di động (mobile), cấu trúc sidebar cố định chiều rộng (`w-64`) chưa có cơ chế ẩn/hiện dạng Drawer, có thể gây chật chội hoặc mất không gian hiển thị nội dung chính[cite: 1, 2].
  * Form thêm/sửa sản phẩm chia lưới 2 cột (`grid-cols-2`) mà chưa khai báo điểm ngắt responsive (ví dụ `md:grid-cols-2 grid-cols-1`), có thể khiến các ô input bị bóp quá hẹp khi thu nhỏ màn hình[cite: 2].

---