#!/usr/bin/env python3
from models import User, Restaurant, Review 
from flask import request, session
from config import app, db

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
            image=json_data.get('image')
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

@app.route('/users/<int:id>', methods=['GET'])
def get_users_by_id(id):
    user_id = User.query.filter(User.id == id).first()

    if user_id is None:
        return {"error": "User not found"}, 404
    
    if request.method == 'GET':
        return user_id.to_dict(), 200


@app.route('/reviews', methods=['GET', 'POST'])
def all_reviews():
    if request.method == 'GET':
        review_obj = Review.query.all()

        review_dict = []
        for review in review_obj:
            review_dict.append(review.to_dict())
            
        return review_dict, 200
    
    if request.method == 'POST':
        json_data = request.get_json()

        new_review = Review(
            rating=json_data.get('rating'),
            title=json_data.get('title'),
            body=json_data.get('body'),
            user_id=json_data.get('user_id'),
            restaurant_id=json_data.get('restaurant_id')
        )

        db.session.add(new_review)
        db.session.commit()

        return new_review.to_dict(), 201

@app.route('/reviews/<int:id>', methods=['GET', 'PATCH'])
def review_by_id(id):
    review_id = Review.query.filter(Review.id == id).first()

    if review_id is None:
        return {"error": "Review not found"}, 404
    
    if request.method == 'GET':
        return review_id.to_dict(), 200
    
    elif request.method == 'PATCH':
        json_data = request.get_json()

        for field in json_data:
            value = json_data[field]
            setattr(review_id, field, value)

        db.session.add(review_id)
        db.session.commit()

        return review_id.to_dict(), 200

@app.route('/reviews/restaurant/<int:id>', methods=['GET'])
def review_restaurant_id(id):
    restaurant_reviews = Review.query.filter(Review.restaurant_id == id).all()

    return [review.to_dict()for review in restaurant_reviews], 200

@app.route('/reviews/user/<int:id>', methods=['GET'])
def review_user_id(id):
    user_reviews = Review.query.filter(Review.user_id == id).all()

    return [review.to_dict() for review in user_reviews], 200

#### STRETCH GOALS - AUTHENTICATION ####

@app.route('/login', methods=['POST'])
def login():
    json = request.get_json()
    user = User.query.filter(User.username == json.get('username')).first()
    if not user or not user.authenticate(json.get('password')):
        return {'error': 'Invalid username or password'}
    session['user_id'] = user.id
    session['username'] = user.username
    return user.to_dict(rules=('-reviews', '-_password'))

@app.route('/logout', methods=['DELETE'])
def logout():
    if not session.get('user_id'):
        return {'error': 'Not logged in'}, 401
    session['user_id'] = None
    session['username'] = None
    return {'message':'Goodbye'}, 200


#@app.route('/signup', methods=['POST'])

#@app.route('/check_session', methods=['GET'])

#### MAY NOT NEED ####
#@app.route('/map')

if __name__ == "__main__":
    app.run(port=5555, debug=True)
