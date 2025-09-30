# Lab 06 – ATM Class & Package Diagram

## 1. Class Diagram
- Mô tả các lớp: ATM, Card, Account, Transaction.
- Mối quan hệ:
  - ATM sử dụng Card, tạo Transaction.
  - Card liên kết với Account.
  - Account ghi nhận Transaction.

## 2. Package Diagram
- UI: màn hình, keypad, card reader UI.
- Controller: điều phối luồng giao dịch.
- BankService: nghiệp vụ ngân hàng (Account, Transaction, AuthenticationService).
- Hardware: ATM, máy đọc thẻ, máy nhả tiền, máy in biên lai.

## 3. Công cụ
- PlantUML + VS Code.
- Lệnh export: `plantuml *.puml`.

## 4. Kết quả
- class-atm.puml/png
- package-diagram.puml/png
- notes.md
