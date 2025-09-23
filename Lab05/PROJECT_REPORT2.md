# Lab 02 - Sequence Diagram Notes

## Luồng chính - Rút tiền thành công
1. Customer tiếp cận ATM
2. ATM hiển thị welcome screen
3. Customer đưa thẻ vào CardReader
4. ATM yêu cầu nhập PIN
5. Customer nhập PIN qua Keypad
6. ATM gửi thông tin xác thực đến BankSystem
7. BankSystem xác thực thành công
8. ATM hiển thị menu chính
9. Customer chọn rút tiền
10. ATM yêu cầu nhập số tiền
11. Customer nhập số tiền
12. ATM kiểm tra số dư với BankSystem
13. BankSystem xác nhận đủ tiền
14. ATM xử lý giao dịch rút tiền
15. CashDispenser phát tiền
16. ATM in biên lai
17. ATM trả thẻ cho customer

## Luồng ngoại lệ
- **PIN sai**: Cho phép thử lại tối đa 3 lần
- **Số dư không đủ**: Hiển thị lỗi và trả thẻ
- **Quá 3 lần nhập sai**: Khóa thẻ và giữ lại

## Các thành phần tham gia
- **Customer**: Người dùng ATM
- **ATM**: Bộ điều khiển chính
- **CardReader**: Đọc thông tin thẻ
- **Display**: Hiển thị giao diện
- **Keypad**: Nhận input từ user
- **BankSystem**: Hệ thống ngân hàng
- **CashDispenser**: Máy phát tiền
- **ReceiptPrinter**: Máy in biên lai
