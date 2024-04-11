#!/usr/bin/env python3
from models import db, User, Restaurant, Review 
from flask_migrate import Migrate
from flask import Flask, request, make_response


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///database.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)