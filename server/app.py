#!/usr/bin/env python3

from models import db, User, Trip, Activity, Category, Activity_Category
from flask_migrate import Migrate
from flask import Flask, jsonify, request
from flask_restful import Api, Resource
import os
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token
import re
from flask_cors import CORS

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get("DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

CORS(app)

jwt = JWTManager(app)

app.config['JWT_SECRET_KEY'] = 'group_6_travel_app' 


@app.route("/")
def index():
    return "<h1>Travel Planning App</h1>"

bcrypt = Bcrypt(app)

@app.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    # Validate email and password
    if not email or not password:
        return jsonify({'error': 'Please enter both email and password'})
    if not re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', email):
        return jsonify({'error': 'Invalid email address'})
    if len(password) < 4:
        return jsonify({'error': 'Password must be at least 4 characters long'})

    # Authenticate the user and return a token
    user = User.query.filter_by(email=email).first()
    if user and bcrypt.check_password_hash(user.password, password):
        token = create_access_token(user.id)
        return jsonify({'token': token})
    else:
        return jsonify({'error': 'Invalid username or password'})

@app.route('/signup', methods=['POST'])
def signup():
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']
    confirm_password = request.json['confirmPassword']
    # Validate email and password
    if not email or not password:
        return jsonify({'error': 'Please enter both email and password'})
    if not re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', email):
        return jsonify({'error': 'Invalid email address'})
    if len(password) < 4:
        return jsonify({'error': 'Password must be at least 4 characters long'})
    if password != confirm_password:
        return jsonify({'error': 'Passwords do not match'})

    # Check if user with same email or username already exists
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({'error': 'User with same email already exists'})
    existing_username = User.query.filter_by(username=username).first()
    if existing_username:
        return jsonify({'error': 'User with same username already exists'})

    # Create a new user account
    new_user = User(username=username, email=email, password=bcrypt.generate_password_hash(password).decode('utf-8'))
    db.session.add(new_user)
    db.session.commit()

    # Return a success message or redirect to login page
    return jsonify({'message': 'Sign up successful!'})

@app.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    user_list = [{"id": user.id, "username": user.username, "email": user.email} for user in users]
    return jsonify(user_list)

@app.route("/users/<int:id>", methods=["GET"])
def get_user(id):
    user = db.session.get(User, id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    user_data = {"id": user.id, "username": user.username, "email": user.email}
    return jsonify(user_data)

@app.route("/users", methods=["POST"])
def create_user():
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not (username and email and password):
        return jsonify({"errors": ["validation errors"]}), 400

    new_user = User(
        username=username,
        email=email,
        password=password
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"id": new_user.id, "username": new_user.username, "email": new_user.email}), 201

@app.route("/users/<int:id>", methods=["PUT"])
def update_user(id):
    user = db.session.get(User, id)
    if not user:
        return jsonify({"error": "User not found"}), 404

    data = request.get_json()
    user.username = data.get("username", user.username)
    user.email = data.get("email", user.email)
    user.password = data.get("password", user.password)

    db.session.commit()

    return jsonify({"id": user.id, "username": user.username, "email": user.email})


@app.route("/users/<int:id>", methods=["DELETE"])
def delete_user(id):
    user = db.session.get(User, id)
    if not user:
        return jsonify({"error": "User not found"}), 404

    db.session.delete(user)
    db.session.commit()

    return jsonify({"message": "User deleted"})


@app.route("/trips", methods=["GET"])
def get_trips():
    trips = Trip.query.all()
    trip_list = [{
        "id": trip.id,
        "destination": trip.destination,
        "start_date": trip.start_date,
        "end_date": trip.end_date,
        "user_id": trip.user_id,
        "image_url":trip.image_url

    } for trip in trips]
    return jsonify(trip_list)

@app.route("/trips/<int:id>", methods=["GET"])
def get_trip(id):
    trip = db.session.get(Trip, id)
    if not trip:
        return jsonify({"error": "Trip not found"}), 404

    activities = Activity.query.filter_by(trip_id=id).all()
    activity_list = [{
        "id": activity.id,
        "description": activity.description,
        "date": activity.date,
        "time": activity.time,
        "cost": activity.cost
    } for activity in activities]

    trip_data = {
        "id": trip.id,
        "destination": trip.destination,
        "start_date": trip.start_date,
        "end_date": trip.end_date,
        "user_id": trip.user_id,
        "activities": activity_list,
        "image_url":trip.image_url

    }
    return jsonify(trip_data)

@app.route("/trips", methods=["POST"])
def create_trip():
    data = request.get_json()
    destination = data.get("destination")
    start_date = data.get("start_date")
    end_date = data.get("end_date")
    user_id = data.get("user_id")

    if not (destination and start_date and end_date and user_id):
        return jsonify({"errors": ["validation errors"]}), 400

    new_trip = Trip(
        destination=destination,
        start_date=start_date,
        end_date=end_date,
        user_id=user_id
    )

    db.session.add(new_trip)
    db.session.commit()

    return jsonify({"id": new_trip.id, "destination": new_trip.destination, "start_date": new_trip.start_date, "end_date": new_trip.end_date, "user_id": new_trip.user_id}), 201

@app.route("/trips/<int:id>", methods=["PUT"])
def update_trip(id):
    trip = db.session.get(Trip, id)
    if not trip:
        return jsonify({"error": "Trip not found"}), 404

    data = request.get_json()
    trip.destination = data.get("destination", trip.destination)
    trip.start_date = data.get("start_date", trip.start_date)
    trip.end_date = data.get("end_date", trip.end_date)
    trip.user_id = data.get("user_id", trip.user_id)

    db.session.commit()

    return jsonify({"id": trip.id, "destination": trip.destination, "start_date": trip.start_date, "end_date": trip.end_date, "user_id": trip.user_id})

@app.route("/trips/<int:id>", methods=["DELETE"])
def delete_trip(id):
    trip = db.session.get(Trip, id)
    if not trip:
        return jsonify({"error": "Trip not found"}), 404

    db.session.delete(trip)
    db.session.commit()

    return jsonify({"message": "Trip deleted"})

@app.route("/activities", methods=["GET"])
def get_activities():
    activities = Activity.query.all()
    activity_list = [{
        "id": activity.id,
        "description": activity.description,
        "date": activity.date,
        "time": activity.time,
        "cost": activity.cost,
        "trip_id": activity.trip_id,
        "image_url":activity.image_url

    } for activity in activities]
    return jsonify(activity_list)


@app.route("/activities/<int:id>", methods=["GET"])
def get_activity(id):
    activity = db.session.get(Activity, id)
    if not activity:
        return jsonify({"error": "Activity not found"}), 404

    activity_data = {
        "id": activity.id,
        "description": activity.description,
        "date": activity.date,
        "time": activity.time,
        "cost": activity.cost,
        "trip_id": activity.trip_id,
        "image_url":activity.image_url

    }
    return jsonify(activity_data)


@app.route("/activities", methods=["POST"])
def create_activity():
    data = request.get_json()
    description = data.get("description")
    date = data.get("date")
    time = data.get("time")
    cost = data.get("cost")
    trip_id = data.get("trip_id")

    if not (description and date and time and cost and trip_id):
        return jsonify({"errors": ["validation errors"]}), 400

    new_activity = Activity(
        description=description,
        date=date,
        time=time,
        cost=cost,
        trip_id=trip_id
    )

    db.session.add(new_activity)
    db.session.commit()

    return jsonify({"id": new_activity.id, "description": new_activity.description, "date": new_activity.date, "time": new_activity.time, "cost": new_activity.cost, "trip_id": new_activity.trip_id}), 201
@app.route("/activities/<int:id>", methods=["PUT"])
def update_activity(id):
    activity = db.session.get(Activity, id)
    if not activity:
        return jsonify({"error": "Activity not found"}), 404

    data = request.get_json()
    activity.description = data.get("description", activity.description)
    activity.date = data.get("date", activity.date)
    activity.time = data.get("time", activity.time)
    activity.cost = data.get("cost", activity.cost)
    activity.trip_id = data.get("trip_id", activity.trip_id)

    db.session.commit()

    return jsonify({"id": activity.id, "description": activity.description, "date": activity.date, "time": activity.time, "cost": activity.cost, "trip_id": activity.trip_id})
@app.route("/categories", methods=["GET"])
def get_categories():
    categories = Category.query.all()
    category_list = [{"id": category.id, "name": category.name, "image_url":category.image_url
} for category in categories]
    return jsonify(category_list)


@app.route("/categories/<int:id>", methods=["GET"])
def get_category(id):
    category = db.session.get(Category, id)
    if not category:
        return jsonify({"error": "Category not found"}), 404

    category_data = {"id": category.id, "name": category.name}
    return jsonify(category_data)
@app.route("/activity_categories", methods=["GET"])
def get_activity_categories():
    activity_categories = Activity_Category.query.all()
    Activity_Category_list = [{
        "activity_id": ac.activity_id,
        "category_id": ac.category_id
    } for ac in activity_categories]
    return jsonify(Activity_Category_list)


if __name__ == "__main__":
    app.run(port=5555, debug=True)
