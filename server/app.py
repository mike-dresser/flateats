#!/usr/bin/env python3
import os

from models import db, User, Restaurant, Review 
from flask_migrate import Migrate
from flask import Flask, request, session
from flask_cors import CORS, cross_origin


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///database.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
cors = CORS(app, resources={r"/": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

CORS(app, supports_credentials=True)

@app.route('/')
def root():
    return '<h1>Flateats</h1>'

@app.route('/restaurants', methods=['GET', 'POST'])
def all_restaurants():

    if request.method == 'GET':
        restaurant_obj = Restaurant.query.all()

        restaurant_dict = []
        for restaurant in restaurant_obj: 
            restaurant_dict.append(restaurant.to_dict())

        return restaurant_dict, 200
    
    elif request.method == 'POST':
        json_data = request.get_json()

        new_restuarant = Restaurant(
            name=json_data.get('name'),
            distance_time=json_data.get('distance_time'),
            price=json_data.get('price'),
            cuisine=json_data.get('cuisine'),
        )

        db.session.add(new_restuarant)
        db.session.commit()

        return new_restuarant.to_dict(), 201
    
@app.route('/restaurants/<int:id>', methods=['GET'])
def restaurants_by_id(id):
    rest_id = Restaurant.query.filter(Restaurant.id == id).first()

    if rest_id is None:
        return {"error": "Restaurant not found"}, 404
    
    if request.method == 'GET':
        return rest_id.to_dict(), 200

@app.route('/users', methods=['GET'])
def get_users_users():
    if request.method == 'GET':
        users_obj = User.query.all()

        users_dict = []
        for user in users_obj: 
            users_dict.append(user.to_dict())

        return users_dict, 200

#@app.route('/users/<int:id>', methods=['GET', 'PATCH'])

#@app.rout('/reviews, methods=['GET', 'POST', 'PATCH'])

#@app.rout('/reviews/<int:id>, methods=['GET', 'PATCH'])

#### STRETCH GOALS - AUTHENTICATION ####
#@app.route('/login', methods=['POST'])

#@app.route('/logout', methods=['DELETE'])

#@app.route('/signup', methods=['POST'])

#@app.route('/check_session', methods=['GET'])

#### MAY NOT NEED ####
#@app.route('/map')

if __name__ == "__main__":
    app.run(port=5555, debug=True)
