from flask import Flask, request
from flask_cors import CORS
import os

app = Flask(__name__)

# Configure CORS
cors = CORS(app, resources={r"/submit-form": {"origins": "http://localhost:3000"}})

@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.json
    with open('submissions.txt', 'a') as file:
        file.write(f"Username: {data['username']}, Email: {data['email']}\n")
    return {"message": "Submission successful"}, 200

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
     app.run(host='0.0.0.0', port=5001)
