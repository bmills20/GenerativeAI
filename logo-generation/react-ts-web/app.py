from flask import Flask, render_template, request, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='./build', static_url_path='/')
CORS(app)  # This will enable CORS for all routes

@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/data', methods=['GET'])
def get_data():
    # This is where you would usually fetch and return data from your database
    # For this example, we'll just return some static data
    return jsonify({'key': 'value'})

@app.route('/generate_logo', methods=['POST'])
def generate_logo():
    data = request.json
    # model = load_model()
    # input_data = preprocess_input(data)
    # logo = generate(model, input_data)
    # output_data = postprocess_output(logo)
    # return jsonify({'logo': output_data})
    return jsonify({'logo': data})  # simplified for testing

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(port=5000)  # This will start the server on http://localhost:5000
