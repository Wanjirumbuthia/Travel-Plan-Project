from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from config import db, metadata
from sqlalchemy.orm import validates
import re

# Association table to store many-to-many relationship between categories and activities
class Activity_Category(db.Model, SerializerMixin):
    __tablename__ = "activity_category"

    activity_id = db.Column(db.Integer, db.ForeignKey('activities.id'), primary_key=True)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), primary_key=True)
    # rating = db.Column(db.Integer, nullable=False)

    # Relationship mapping Activity_Category to Category
    category = db.relationship('Category', back_populates="categories_activities")
    activity = db.relationship('Activity', back_populates="activities_categories")

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String(80), unique=True)
    password = db.Column(db.String)

    # Relationship mapping User model to Trip model
    trips = db.relationship('Trip', back_populates='user')

    @validates('email')
    def validate_email(self, key, email):
        # Simple regex for validating an Email
        regex = r'^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        if not re.match(regex, email):
            raise ValueError("Invalid email address")
        return email

    def __repr__(self):
        return f'<User {self.id}, {self.username}, {self.email}>'

class Trip(db.Model, SerializerMixin):
    __tablename__ = 'trips'

    id = db.Column(db.Integer, primary_key=True)
    destination = db.Column(db.String)
    start_date = db.Column(db.DateTime, nullable=False)
    end_date = db.Column(db.DateTime, nullable=False)
    image_url = db.Column(db.String(200), nullable=True)
    # Foreign key to associate User and Trip
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    # Relationship mapping User model to Trip model
    user = db.relationship('User', back_populates='trips')

    # Relationship mapping Trip model to Activity model
    activities = db.relationship('Activity', back_populates='trip', cascade='all, delete-orphan')

    def __repr__(self):
        return f'<Trip {self.id}, {self.destination}, {self.start_date}, {self.end_date}, {self.image_url}>'

class Activity(db.Model, SerializerMixin):
    __tablename__ = 'activities'

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String)
    date = db.Column(db.DateTime, nullable=False)
    time = db.Column(db.String, nullable=False)
    cost = db.Column(db.Float, nullable=False)
    image_url = db.Column(db.String(200), nullable=True)
    # Foreign Key to associate Activity and Trip models
    trip_id = db.Column(db.Integer, db.ForeignKey('trips.id'), nullable=False)

    # Relationship mapping Trip model to Activity model
    trip = db.relationship('Trip', back_populates='activities')

    # Relationship mapping the activity to related category
    categories = db.relationship(
        'Category', secondary='activity_category', back_populates='activities')

    activities_categories = db.relationship('Activity_Category', back_populates='activity')
    
    # Association proxy to access categories through the activity_category table
    categories_proxy = association_proxy('categories', 'name')

    def __repr__(self):
        return f'<Activity {self.id}, {self.description}, {self.date}, {self.cost}, {self.image_url}>'
    
class Category(db.Model, SerializerMixin):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image_url = db.Column(db.String(200), nullable=True)
    # Relationship mapping the activity to related category
    activities = db.relationship(
        'Activity', secondary='activity_category', back_populates='categories')

    categories_activities = db.relationship('Activity_Category', back_populates='category')

    def __repr__(self):
        return f'<Category {self.id}, {self.name}, {self.image_url}>'

