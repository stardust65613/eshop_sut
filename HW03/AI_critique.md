# AI Critique – GUI Checklist Generation

## Tổng quan

AI đã hỗ trợ xây dựng GUI Checklist cho ba màn hình Admin Login, Products và Categories dựa trên source code và giao diện thực tế. Kết quả gồm 40 checklist items, được phân loại theo bốn nhóm IA-01 (General UI Standards), IA-02 (Forms), IA-03 (Navigation) và IA-04 (Feedback/State) và file excel tổng hợp. 

Nhìn chung, AI tạo được cấu trúc checklist tương đối đầy đủ, có phân chia theo Screen, Component, Checklist Item, Expected Result và Verification Method. Điều này giúp quá trình kiểm thử có hệ thống và dễ dàng ghi nhận kết quả.

## Điểm mạnh của AI

- **Phân loại hợp lý:** AI phân chia các tiêu chí theo bốn nhóm IA, giúp bao quát bố cục giao diện, nhập liệu, điều hướng và phản hồi hệ thống.
- **Nhận diện thành phần giao diện:** AI xác định được các thành phần chính như Text Box, Button, Dropdown, Data Table, Sidebar và CSV File Picker.
- **Expected Result cụ thể:** Phần lớn checklist có kết quả mong đợi rõ ràng, giúp người kiểm thử xác định điều kiện Passed hoặc Failed.
- **Đề xuất phương pháp kiểm thử:** AI lựa chọn các phương pháp như Visual Inspection, Functional Testing, Validation Testing và UI State Testing phù hợp với nhiều tiêu chí.

## Hạn chế của AI

- **Phụ thuộc vào source code:** Một số Expected Result tập trung vào chi tiết triển khai như CSS classes, tên state, hàm xử lý hoặc API endpoint thay vì hành vi người dùng có thể quan sát.
- **Phạm vi kiểm thử chưa đồng đều:** Một số tiêu chí tập trung vào chức năng chính nhưng chưa đánh giá đầy đủ khả năng phản hồi và tính nhất quán của giao diện.

=> AI giúp rút ngắn thời gian phân tích giao diện và xây dựng danh sách kiểm thử ban đầu. Tuy nhiên, kết quả vẫn cần được review để loại bỏ các tiêu chí quá phụ thuộc vào cách triển khai, làm rõ Expected Result và bổ sung những hành vi chưa được đề cập.


## Nguyên tắc sử dụng AI
- Luôn kiểm tra đầu ra của AI ở từng bước thực hiện. Đảm bảo AI có thông tin cần thiết trước khi thực hiện task. 