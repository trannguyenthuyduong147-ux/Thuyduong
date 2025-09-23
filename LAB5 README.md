# LAB 05 – ATM System Project
## 1. Giới thiệu
- **Tên dự án**: ATM System  
- **Mục tiêu**: Hoàn thiện quy trình phần mềm từ thiết kế đến triển khai (từ Use Case, Sequence đến giao diện prototype).  
- **Công nghệ sử dụng**: HTML, CSS, JavaScript, PlantUML, Markdown, Git, GitHub.  
## 2. Cấu trúc repo
/ (root)
├─ LAB5 README.md
├─ project-report.md
├─ labs/
│ ├─ lab01-usecase/
│ │ └─ usecase-atm.puml
│ ├─ lab02-sequence/
│ │ └─ sequence-withdraw.puml
│ ├─ lab03-forms/
│ │ └─ login-form.html
│ ├─ lab04-code/
│ │ └─ atm-ui/...
│ └─ lab05-integration/
│ └─ deployment-notes.md
└─ docs/
└─ diagrams/
markdown
Copy code
## 3. Artifacts
### 3.1 Use Case Diagram
- **File**: `labs/lab01-usecase/usecase-atm.puml`  
- **Actors**: Customer, Bank System, ATM Administrator  
- **Use Cases**: Withdraw, Deposit, Check Balance, Transfer, Change PIN, Print Receipt 
### 3.2 Sequence Diagram
- **File**: `labs/lab02-sequence/sequence-withdraw.puml`  
- **Mô tả**: Luồng rút tiền từ nhập PIN → xác thực → chọn số tiền → nhận tiền → in hóa đơn.  
### 3.3 Giao diện / Form
- **File**: `labs/lab03-forms/login-form.html`  
- **Mô tả**: Form đăng nhập/nhập PIN, giao diện cơ bản ATM.  
### 3.4 Prototype code
- **Folder**: `labs/lab04-code/atm-ui/`  
- **Mô tả**: Code HTML/CSS/JS mô phỏng giao diện ATM.  
## 4. Hướng dẫn chạy
- Mở file `labs/lab04-code/atm-ui/index.html` trên trình duyệt.  
- Các sơ đồ `.puml` có thể mở bằng **PlantUML** hoặc xem ảnh export trong `docs/diagrams/`.  

## 5. Git & Version
1. Commit thay đổi:
   ```bash
   git add .
   git commit -m "Add LAB5 README and project report"
   git push origin main
Tạo tag version:
bash
Copy code
git tag -a v1.0 -m "Release v1.0"
git push origin v1.0
