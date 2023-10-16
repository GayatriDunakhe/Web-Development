from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson import ObjectId

app = Flask(__name__)

client = MongoClient('mongodb://localhost:27017/')
db = client['newdb']
customers_collection = db['customers']

@app.route('/add_customer', methods=['POST'])
def add_customer():
    data = request.get_json()
    if 'customerName' not in data or 'customerMobile' not in data or 'customerAddress' not in data:
        return jsonify({'error': 'Missing customer data'}), 400

    customer = {
        'customerName': data['customerName'],
        'customerMobile': data['customerMobile'],
        'customerAddress': data['customerAddress']
    }

    if customers_collection.find_one({'customerMobile': customer['customerMobile']}):
        return jsonify({'error': 'Customer already exists'}), 409

    customer_id = customers_collection.insert_one(customer).inserted_id

    return jsonify({'customer_id': str(customer_id)}), 201

@app.route('/get_all_customers', methods=['GET'])
def get_all_customers():
    customers = list(customers_collection.find({}, {'_id': False}))
    return jsonify(customers), 200

if __name__ == '__main__':
    app.run(debug=True)
