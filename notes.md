# ATM System - Lab 06 Design Notes

## Tổng quan
Thiết kế chi tiết lớp và kiến trúc cho hệ thống ATM bao gồm Class Diagram và Package Diagram.

## Class Diagram

### Các lớp chính:
1. **ATM**: Lớp trung tâm đại diện cho máy ATM
   - Thuộc tính: atmId, location, cashLevel
   - Phương thức: authenticate(), withdraw(), deposit(), transfer()

2. **Card**: Đại diện cho thẻ ngân hàng
   - Thuộc tính: cardNo, pinHash, status
   - Phương thức: validatePin(), isActive()

3. **Account**: Tài khoản ngân hàng
   - Thuộc tính: accountNo, balance
   - Phương thức: debit(), credit(), getBalance(), checkSufficientFunds()

4. **Transaction**: Giao dịch
   - Thuộc tính: txId, type, amount, time, status
   - Phương thức: getTransactionDetails(), updateStatus()

5. **Customer**: Khách hàng
   - Thuộc tính: customerId, name, phone
   - Phương thức: getName()

6. **Bank**: Ngân hàng
   - Thuộc tính: bankCode, name
   - Phương thức: verifyAccount(), processTransaction()

### Quan hệ:
- ATM tạo ra nhiều Transaction (1:*)
- ATM sử dụng nhiều Card (1:*)
- Card truy cập một hoặc nhiều Account (1:*)
- Customer sở hữu nhiều Card (1:*)
- Customer có nhiều Account (1:*)
- Bank quản lý nhiều Account (1:*)

## Package Diagram

### Các package:
1. **UI**: Giao diện người dùng
   - ATMInterface, DisplayScreen, Keypad, CardReader, ReceiptPrinter

2. **Controller**: Điều khiển logic
   - ATMController, TransactionController, AuthenticationController, SessionManager

3. **BankService**: Dịch vụ ngân hàng
   - BankService, AccountService, TransactionService, ValidationService

4. **Hardware**: Phần cứng
   - CashDispenser, DepositSlot, CardReaderHW, NetworkInterface

5. **Model**: Mô hình dữ liệu
   - ATM, Card, Account, Transaction, Customer, Bank

### Dependencies:
- UI → Controller: Giao diện sử dụng các controller
- Controller → BankService: Controller gọi các dịch vụ ngân hàng
- Controller → Hardware: Controller điều khiển phần cứng
- BankService → Model: Dịch vụ thao tác với mô hình dữ liệu
- Hardware → Model: Phần cứng cập nhật mô hình

## Ưu điểm của thiết kế:
1. **Tách biệt rõ ràng**: Mỗi package có trách nhiệm riêng biệt
2. **Dễ bảo trì**: Thay đổi một phần không ảnh hưởng toàn hệ thống
3. **Có thể mở rộng**: Dễ dàng thêm tính năng mới
4. **Tuân theo nguyên tắc SOLID**: Single Responsibility, Open/Closed, etc.

## Cách export PNG:
1. Sử dụng PlantUML extension trong VS Code
2. Click chuột phải vào file .puml → "Export Current File Diagrams"
3. Chọn định dạng PNG

## Cấu trúc thư mục:
