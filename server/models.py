from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from config import db, bcrypt



class User(db.Model, SerializerMixin):
    __tablename__='users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    _password = db.Column(db.String, nullable=False)

    # add relationship
    reviews = db.relationship('Review', back_populates='user')
    # # add serialization rules
    serialize_rules = ['-reviews.user']

    @hybrid_property
    def password(self):
        return self._password
    
    @password.setter
    def password(self, new_password):
        hashed = bcrypt.generate_password_hash(new_password.encode('utf-8'))
        self._password = hashed.decode('utf-8')

    def authenticate(self, candidate_password):
        return bcrypt.check_password_hash(self._password, candidate_password)

    def __repr__(self):
        return f'<User {self.id} {self.username}>'

class Restaurant(db.Model, SerializerMixin):
    __tablename__='restaurants'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    distance_time = db.Column(db.Integer)
    price = db.Column(db.Integer)
    cuisine = db.Column(db.String)
    pos_lat = db.Column(db.Float)
    pos_lon = db.Column(db.Float)
    image = db.Column(db.String)

    reviews = db.relationship('Review', back_populates = 'restaurant')

    serialize_rules = ['-reviews.restaurant']

class Review(db.Model, SerializerMixin):
    __tablename__='reviews'

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer)
    title = db.Column(db.String)
    body = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurants.id'))

    user = db.relationship('User', back_populates='reviews')
    restaurant = db.relationship('Restaurant', back_populates='reviews')

    serialize_rules = ['-user.reviews', '-restaurant.reviews']