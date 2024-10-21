from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample database of gym members
members = {
    "john_doe": {"name": "John Doe", "membership": "Gold", "expiry": "2025-10-01"},
    "jane_smith": {"name": "Jane Smith", "membership": "Silver", "expiry": "2024-12-15"}
}

@app.route('/get_membership', methods=['POST'])
def get_membership():
    user = request.json['user'].lower()
    if user in members:
        return jsonify(members[user])
    else:
        return jsonify({"error": "Member not found!"})

if __name__ == '__main__':
    app.run(debug=True)
