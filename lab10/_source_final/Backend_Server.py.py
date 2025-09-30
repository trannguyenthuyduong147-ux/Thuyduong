from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import hashlib
from atm_demo import verify_pin, withdraw, DB_CONFIG

app = Flask(__name__)
CORS(app)  # cho phép gọi từ frontend

@app.route("/api/withdraw", methods=["POST"])
def api_withdraw():
    data = request.get_json()
    card_no = data.get("card_no")
    pin = data.get("pin")
    amount = float(data.get("amount", 0))

    # 1. Xác thực PIN
    if not verify_pin(card_no, pin):
        return jsonify({"success": False, "message": "PIN không hợp lệ hoặc thẻ bị khóa"}), 400

    # 2. Lấy số dư trước
    conn = mysql.connector.connect(**DB_CONFIG)
    cur = conn.cursor()
    cur.execute("""
        SELECT a.balance
        FROM accounts a
        JOIN cards c ON a.account_id=c.account_id
        WHERE c.card_no=%s
    """, (card_no,))
    row = cur.fetchone()
    conn.close()

    if not row:
        return jsonify({"success": False, "message": "Không tìm thấy thẻ"}), 404

    balance_before = row[0]

    if amount <= 0:
        return jsonify({"success": False, "message": "Số tiền rút không hợp lệ"}), 400

    # 3. Rút tiền
    try:
        withdraw(card_no, amount)
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 400

    # 4. Lấy lại số dư sau khi rút
    conn = mysql.connector.connect(**DB_CONFIG)
    cur = conn.cursor()
    cur.execute("""
        SELECT a.balance
        FROM accounts a
        JOIN cards c ON a.account_id=c.account_id
        WHERE c.card_no=%s
    """, (card_no,))
    new_balance = cur.fetchone()[0]
    conn.close()

    return jsonify({
        "success": True,
        "withdrawn": amount,
        "balance_after": new_balance
    })

if __name__ == "__main__":
    app.run(debug=True)
