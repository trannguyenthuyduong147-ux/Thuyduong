CREATE DATABASE atm_demo;
USE atm_demo;

CREATE TABLE accounts (
    account_id INT PRIMARY KEY AUTO_INCREMENT,
    account_no VARCHAR(20) UNIQUE NOT NULL,
    balance DOUBLE NOT NULL DEFAULT 0
);

CREATE TABLE cards (
    card_no VARCHAR(20) PRIMARY KEY,
    account_id INT,
    pin_hash CHAR(64) NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    FOREIGN KEY(account_id) REFERENCES accounts(account_id)
);

CREATE TABLE transactions (
    tx_id INT PRIMARY KEY AUTO_INCREMENT,
    account_id INT,
    card_no VARCHAR(20),
    atm_id INT,
    tx_type VARCHAR(20),
    amount DOUBLE,
    balance_after DOUBLE,
    tx_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
