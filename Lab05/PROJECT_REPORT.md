# Lab 05 - Use Case Diagram Notes
## Actors
- **Bank Customer**: Người dùng ATM thực hiện giao dịch
- **ATM Administrator**: Quản trị viên bảo trì ATM
- **Bank System**: Hệ thống ngân hàng xử lý giao dịch
## Use Cases chính
1. **Insert Card**: Khách hàng đưa thẻ vào ATM
2. **Enter PIN**: Nhập mã PIN để xác thực
3. **Withdraw Money**: Rút tiền từ tài khoản
4. **Deposit Money**: Nộp tiền vào tài khoản
5. **Check Balance**: Kiểm tra số dư tài khoản
6. **Transfer Money**: Chuyển tiền giữa các tài khoản
7. **Change PIN**: Thay đổi mã PIN
8. **Print Receipt**: In biên lai giao dịch
9. **Eject Card**: Trả thẻ cho khách hàng
## Use Cases quản trị
10. **Refill Cash**: Nạp tiền vào ATM
11. **Check ATM Status**: Kiểm tra trạng thái ATM
12. **Generate Report**: Tạo báo cáo giao dịch
13. **Maintenance**: Bảo trì hệ thống
## Quan hệ
- **Include**: Tất cả giao dịch phải insert card và enter PIN
- **Extend**: In receipt và eject card là tùy chọn
