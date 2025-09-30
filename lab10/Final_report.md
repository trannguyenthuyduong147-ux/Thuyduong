# Báo cáo Mini Project: ATM Withdraw

## 1. Giới thiệu
Mini Project **ATM Withdraw** được xây dựng nhằm mô phỏng chức năng rút tiền cơ bản của một máy ATM.  
Người dùng nhập **mã PIN**, sau đó có thể rút một khoản tiền nhất định từ tài khoản.  
Hệ thống sẽ kiểm tra số dư, xác thực PIN, và cập nhật số dư mới trong cơ sở dữ liệu.

---

## 2. Mục tiêu
- Hiểu và áp dụng kiến thức về **Python** trong việc xây dựng ứng dụng console.  
- Thực hành kết nối và thao tác với **cơ sở dữ liệu MySQL**.  
- Mô phỏng quy trình xử lý giao dịch tài chính cơ bản: xác thực, kiểm tra điều kiện, cập nhật dữ liệu.  

---

## 3. Mô tả hệ thống
- **Ngôn ngữ lập trình**: Python  
- **Cơ sở dữ liệu**: MySQL  
- **Chức năng chính**:
  - Nhập PIN để xác thực người dùng.  
  - Kiểm tra số dư hiện có trong tài khoản.  
  - Rút tiền nếu đủ điều kiện.  
  - Cập nhật số dư vào database sau mỗi giao dịch.  

---

## 4. Quy trình hoạt động
1. Người dùng nhập **PIN**.  
2. Hệ thống truy vấn số dư từ bảng `accounts` trong MySQL.  
3. Người dùng nhập số tiền cần rút.  
4. Nếu số dư ≥ số tiền rút:
   - Trừ tiền khỏi tài khoản.  
   - Cập nhật số dư mới vào database.  
   - Hiển thị thông báo rút tiền thành công.  
5. Nếu số dư < số tiền rút:  
   - Hiển thị thông báo lỗi: *Insufficient funds*.  

---

## 5. Kết quả đạt được
- Hoàn thiện chức năng rút tiền cơ bản. 
- Hoàn thành được giao diện đăng nhập:
 <img src="Result_Test_image/UI_login.png" alt="Logo" width="200">
- Xác thực mã PIN trước khi thực hiện giao dịch:
<img src="Result_Test_image/Verify_PIN.png" alt="Logo" width="200">
- Giao diện sau khi rút tiền thành công:
<img src="Result_Test_image/Withdraw_success.png" alt="Logo" width="200">
- Kết nối thành công giữa Python và MySQL.  
- Đảm bảo tính toàn vẹn dữ liệu khi rút tiền (commit transaction)
- Sau khi rút thì dữ liệu số dư còn lại đã được đồng bộ trong cơ sở dữ liệu:
<img src="Result_Test_image/sync_database.png" alt="Logo" width="200">

---

## 6. Hạn chế
- Chưa có chức năng **nạp tiền**.  
- Chưa xử lý nhiều tài khoản cùng lúc (multi-user).  
- Chưa có giao diện đồ họa (GUI/web).  
- Chưa mã hóa PIN (hiện lưu dạng plain text trong DB).  

---

## 7. Phương hướng phát triển trong tương lai
- **Bổ sung chức năng**:
  - Nạp tiền, chuyển khoản, in sao kê.  
  - Quản lý nhiều tài khoản (user management).  
- **Bảo mật**:
  - Mã hóa PIN bằng thuật toán băm (bcrypt, SHA-256 + salt).  
  - Kiểm soát số lần nhập sai PIN, khóa tài khoản tạm thời.  
- **Trải nghiệm người dùng**:
  - Xây dựng giao diện web (Flask/Django) hoặc GUI (Tkinter/PyQt).  
  - Tích hợp API REST để giao tiếp với hệ thống khác.  
- **Mở rộng hệ thống**:
  - Mô phỏng thêm tính năng ngân hàng: lãi suất, quản lý nhiều loại tài khoản.  
  - Kết nối với mô hình máy ATM giả lập (hardware simulation).  

---

## 8. Kết luận
Mini Project ATM Withdraw đã giúp nhóm rèn luyện kỹ năng lập trình Python, thao tác với MySQL, và hiểu hơn về quy trình giao dịch tài chính cơ bản.  
Trong tương lai, việc phát triển thêm các tính năng nâng cao sẽ giúp hệ thống trở nên **thực tế hơn, bảo mật hơn và thân thiện với người dùng hơn**.
