# USE CASE DESCRIPTION - HỆ THỐNG QUẢN LÝ THƯ VIỆN

## 1. USE CASE: MƯỢN SÁCH

**Use Case ID:** UC001  
**Use Case Name:** Mượn sách  
**Actor:** Độc giả, Thủ thư  
**Description:** Độc giả thực hiện việc mượn sách từ thư viện  

### Preconditions (Điều kiện tiên quyết):
- Độc giả đã đăng ký thành viên thư viện
- Độc giả có thẻ thư viện hợp lệ
- Sách có sẵn trong thư viện (chưa được mượn hết)
- Độc giả chưa vi phạm quy định (không bị phạt, không quá hạn trả sách)

### Main Flow (Luồng chính):
1. Độc giả đến thư viện và tìm sách cần mượn
2. Độc giả mang sách và thẻ thư viện đến quầy
3. Thủ thư kiểm tra thẻ thư viện của độc giả
4. Thủ thư kiểm tra tình trạng tài khoản độc giả
5. Thủ thư quét mã vạch sách và thẻ thư viện
6. Hệ thống cập nhật thông tin mượn sách (ngày mượn, hạn trả)
7. Thủ thư in phiếu mượn sách
8. Thủ thư giao phiếu mượn và sách cho độc giả

### Alternative Flow (Luồng thay thế):
**4a. Độc giả có vi phạm:**
- 4a1. Hệ thống hiển thị thông báo vi phạm
- 4a2. Thủ thư thông báo cho độc giả về vi phạm
- 4a3. Độc giả phải xử lý vi phạm trước khi mượn sách
- 4a4. Quay lại bước 4

**5a. Sách không có sẵn:**
- 5a1. Hệ thống thông báo sách đã được mượn hết
- 5a2. Thủ thư đề xuất đặt trước sách hoặc chọn sách khác
- 5a3. Use case kết thúc

### Postconditions (Điều kiện sau):
- Thông tin mượn sách được lưu trong hệ thống
- Số lượng sách có sẵn được cập nhật
- Độc giả nhận được sách và phiếu mượn

---

## 2. USE CASE: TRẢ SÁCH

**Use Case ID:** UC002  
**Use Case Name:** Trả sách  
**Actor:** Độc giả, Thủ thư  
**Description:** Độc giả thực hiện việc trả sách về thư viện  

### Preconditions (Điều kiện tiên quyết):
- Độc giả đã mượn sách từ thư viện
- Độc giả có phiếu mượn sách hoặc thẻ thư viện

### Main Flow (Luồng chính):
1. Độc giả đến thư viện với sách cần trả
2. Độc giả đưa sách và thẻ thư viện cho thủ thư
3. Thủ thư kiểm tra thông tin sách và độc giả
4. Thủ thư quét mã vạch sách
5. Hệ thống kiểm tra ngày trả so với hạn trả
6. Thủ thư kiểm tra tình trạng sách
7. Hệ thống cập nhật thông tin trả sách
8. Thủ thư xác nhận hoàn thành việc trả sách
9. Hệ thống cập nhật số lượng sách có sẵn

### Alternative Flow (Luồng thay thế):
**5a. Trả sách quá hạn:**
- 5a1. Hệ thống tính tiền phạt theo số ngày quá hạn
- 5a2. Thủ thư thông báo số tiền phạt cho độc giả
- 5a3. Độc giả thanh toán tiền phạt
- 5a4. Thủ thư cập nhật thông tin thanh toán
- 5a5. Tiếp tục bước 7

**6a. Sách bị hỏng:**
- 6a1. Thủ thư đánh giá mức độ hư hỏng
- 6a2. Thủ thư tính tiền bồi thường (nếu cần)
- 6a3. Độc giả thanh toán tiền bồi thường
- 6a4. Thủ thư cập nhật trạng thái sách
- 6a5. Tiếp tục bước 7

### Exception Flow (Luồng ngoại lệ):
**3a. Không tìm thấy thông tin mượn sách:**
- 3a1. Hệ thống thông báo lỗi
- 3a2. Thủ thư kiểm tra lại thông tin
- 3a3. Nếu vẫn không tìm thấy, báo cáo quản trị viên
- 3a4. Use case kết thúc

### Postconditions (Điều kiện sau):
- Thông tin trả sách được cập nhật trong hệ thống
- Số lượng sách có sẵn được tăng lên
- Tiền phạt/bồi thường (nếu có) được ghi nhận
