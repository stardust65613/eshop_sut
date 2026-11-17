## Đánh giá AI
Qua việc tạo automation test cho ba nhóm chức năng Forgot Password, Checkout và Category Management có thể thấy AI hỗ trợ tốt trong việc tạo cấu trúc Data-Driven Testing, viết các action handler và đề xuất assertion theo yêu cầu. 


## Các lỗi AI mắc phải
Tuy nhiên, output ban đầu chưa hoàn thiện vì AI thiếu thông tin về cấu trúc thư mục, dữ liệu có sẵn và API backend. Điều này dẫn đến sai đường dẫn load JSON, locator không phù hợp, test data bị trùng và assertion không phản ánh đúng hành vi hệ thống. Như: 

### Forgot password
Tạo data: AI đưa ra output hợp lệ nhưng bị trùng data, lý do là trong bộ test case có test case bị trùng nhưng prompt lại không yêu cầu bỏ các test trùng nên AI output bị trùng data. 

## Tóm lại

Nên sử dụng AI như công cụ hỗ trợ tạo bản nháp và đề xuất giải pháp, không nên sử dụng output trực tiếp. Cần cung cấp đầy đủ thông tin môi trường, kiểm tra lại code, đối chiếu API và chạy thử test script để sửa lại cho đúng.  
