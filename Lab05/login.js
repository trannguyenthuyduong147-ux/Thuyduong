// Global variables
let currentCardNumber = '';
let currentPin = '';
let loginAttempts = 0;
let maxAttempts = 3;
let currentInput = '';
let activeField = null;

// Mock database
const mockDatabase = {
    '1234567812345678': {
        pin: '1234',
        accountName: 'Nguyễn Văn A',
        balance: 5000000,
        blocked: false
    },
    '9876543298765432': {
        pin: '9876',
        accountName: 'Trần Thị B', 
        balance: 3000000,
        blocked: false
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    clearForm();
    
    // Add event listeners
    document.getElementById('cardNumber').addEventListener('focus', () => setActiveField('card'));
    document.getElementById('pinNumber').addEventListener('focus', () => setActiveField('pin'));
    
    // Format card number input
    document.getElementById('cardNumber').addEventListener('input', formatCardNumber);
    
    // Restrict PIN input to numbers only
    document.getElementById('pinNumber').addEventListener('input', restrictPinInput);
});

// Set active field for keypad input
function setActiveField(field) {
    activeField = field;
    const cardInput = document.getElementById('cardNumber');
    const pinInput = document.getElementById('pinNumber');
    
    if (field === 'card') {
        cardInput.style.borderColor = '#3498db';
        pinInput.style.borderColor = '#bdc3c7';
    } else if (field === 'pin') {
        pinInput.style.borderColor = '#3498db';
        cardInput.style.borderColor = '#bdc3c7';
    }
}

// Format card number with spaces
function formatCardNumber(e) {
    let value = e.target.value.replace(/\s/g, '');
    let formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    e.target.value = formattedValue;
}

// Restrict PIN to numbers only
function restrictPinInput(e) {
    e.target.value = e.target.value.replace(/\D/g, '');
}

// Keypad functions
function addDigit(digit) {
    if (activeField === 'card') {
        const cardInput = document.getElementById('cardNumber');
        const currentValue = cardInput.value.replace(/\s/g, '');
        if (currentValue.length < 16) {
            cardInput.value = currentValue + digit;
            formatCardNumber({ target: cardInput });
        }
    } else if (activeField === 'pin') {
        const pinInput = document.getElementById('pinNumber');
        if (pinInput.value.length < 4) {
            pinInput.value += digit;
        }
    }
}

function clearDigit() {
    if (activeField === 'card') {
        const cardInput = document.getElementById('cardNumber');
        cardInput.value = cardInput.value.slice(0, -1);
    } else if (activeField === 'pin') {
        const pinInput = document.getElementById('pinNumber');
        pinInput.value = pinInput.value.slice(0, -1);
    }
}

function confirmInput() {
    if (activeField === 'card') {
        document.getElementById('pinNumber').focus();
    } else if (activeField === 'pin') {
        handleLogin();
    }
}

// Validation functions
function validateCardNumber(cardNumber) {
    const cleanCard = cardNumber.replace(/\s/g, '');
    
    if (cleanCard.length !== 16) {
        return { valid: false, message: 'Số thẻ phải có 16 chữ số' };
    }
    
    if (!/^\d+$/.test(cleanCard)) {
        return { valid: false, message: 'Số thẻ chỉ được chứa số' };
    }
    
    return { valid: true, message: '' };
}

function validatePin(pin) {
    if (pin.length !== 4) {
        return { valid: false, message: 'Mã PIN phải có 4 chữ số' };
    }
    
    if (!/^\d+$/.test(pin)) {
        return { valid: false, message: 'Mã PIN chỉ được chứa số' };
    }
    
    return { valid: true, message: '' };
}

// Main login function
function handleLogin() {
    const cardNumber = document.getElementById('cardNumber').value;
    const pin = document.getElementById('pinNumber').value;
    
    // Clear previous error messages
    clearErrors();
    
    // Validate inputs
    const cardValidation = validateCardNumber(cardNumber);
    const pinValidation = validatePin(pin);
    
    if (!cardValidation.valid) {
        showError('cardError', cardValidation.message);
        return;
    }
    
    if (!pinValidation.valid) {
        showError('pinError', pinValidation.message);
        return;
    }
    
    // Check against mock database
    const cleanCard = cardNumber.replace(/\s/g, '');
    
    if (!mockDatabase[cleanCard]) {
        showStatusMessage('Thẻ không tồn tại trong hệ thống', 'error');
        return;
    }
    
    const cardData = mockDatabase[cleanCard];
    
    if (cardData.blocked) {
        showStatusMessage('Thẻ đã bị khóa. Vui lòng liên hệ ngân hàng', 'error');
        return;
    }
    
    if (cardData.pin !== pin) {
        loginAttempts++;
        
        if (loginAttempts >= maxAttempts) {
            cardData.blocked = true;
            showStatusMessage('Nhập sai PIN quá 3 lần. Thẻ đã bị khóa', 'error');
            setTimeout(() => {
                clearForm();
            }, 3000);
        } else {
            showStatusMessage(`Mã PIN không đúng. Còn ${maxAttempts - loginAttempts} lần thử`, 'error');
        }
        return;
    }
    
    // Login successful
    currentCardNumber = cleanCard;
    currentPin = pin;
    loginAttempts = 0;
    
    showStatusMessage(`Đăng nhập thành công! Chào mừng ${cardData.accountName}`, 'success');
    
    setTimeout(() => {
        showMainMenu();
    }, 1500);
}

// Show main menu
function showMainMenu() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('mainMenu').classList.remove('hidden');
}

// Transaction selection
function selectTransaction(type) {
    const cardData = mockDatabase[currentCardNumber];
    let message = '';
    
    switch(type) {
        case 'withdraw':
            message = `Chức năng rút tiền\nSố dư hiện tại: ${formatCurrency(cardData.balance)}`;
            break;
        case 'deposit':
            message = `Chức năng nộp tiền\nSố dư hiện tại: ${formatCurrency(cardData.balance)}`;
            break;
        case 'balance':
            message = `Số dư tài khoản: ${formatCurrency(cardData.balance)}`;
            break;
        case 'transfer':
            message = `Chức năng chuyển khoản\nSố dư hiện tại: ${formatCurrency(cardData.balance)}`;
            break;
        case 'changepin':
            message = 'Chức năng đổi mã PIN';
            break;
    }
    
    alert(message);
}

// Logout function
function logout() {
    if (confirm('Bạn có chắc muốn thoát?')) {
        document.getElementById('mainMenu').classList.add('hidden');
        document.getElementById('loginForm').classList.remove('hidden');
        clearForm();
    }
}

// Utility functions
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    document.getElementById('cardError').textContent = '';
    document.getElementById('pinError').textContent = '';
    document.getElementById('statusMessage').textContent = '';
    document.getElementById('statusMessage').className = 'status-message';
}

function showStatusMessage(message, type) {
    const statusElement = document.getElementById('statusMessage');
    statusElement.textContent = message;
    statusElement.className = `status-message ${type}`;
}

function clearForm() {
    document.getElementById('cardNumber').value = '';
    document.getElementById('pinNumber').value = '';
    clearErrors();
    currentCardNumber = '';
    currentPin = '';
    loginAttempts = 0;
    activeField = null;
}

function cancelTransaction() {
    if (confirm('Bạn có chắc muốn hủy giao dịch?')) {
        clearForm();
    }
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
}

// Handle keyboard input
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (document.getElementById('loginForm').classList.contains('hidden')) {
            return;
        }
        handleLogin();
    }
    
    if (event.key === 'Escape') {
        cancelTransaction();
    }
});
