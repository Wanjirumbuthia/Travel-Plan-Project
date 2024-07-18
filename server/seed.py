from app import app
from models import db, User, Trip, Activity, Category, Activity_Category
from datetime import date

with app.app_context():
    print("Deleting data...")
    Activity_Category.query.delete()
    Activity.query.delete()
    Trip.query.delete()
    Category.query.delete()
    User.query.delete()
    db.session.commit()  
    

    print("Creating users...")
    user1 = User(username="Alice", email="alice345@gmail.com", password="4356217")
    user2 = User(username="Bob", email="bob234@gmail.com", password="436728")
    user3 = User(username="Charlie", email="charlie435@gmail.com", password="65321")
    user4 = User(username="David", email="david637@gmail.com", password="53268")
    user5 = User(username="Eve", email="evey32@example.gmail", password="67387")
    user6 = User(username="Frank", email="frank234@egmail.com", password="89485")
    user7 = User(username="Grace", email="grace3r54@gmal.com", password="67478")
    user8 = User(username="Hannah", email="hannah@gmal.com", password="786457")
    user9 = User(username="Ivy", email="ivy43@gmail.com", password="78648")
    user10 = User(username="Jack", email="jack354@gmail.com", password="87745")

    users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]
    print("Creating trips...")
    
    trip1 = Trip(destination="Paris", start_date=date(2024, 7, 1), end_date=date(2024, 7, 10), user=user1, image_url="https://i.pinimg.com/474x/42/17/a5/4217a50a083a984755576cfc08429f73.jpg")
    trip2 = Trip(destination="Paris", start_date=date(2024, 8, 5), end_date=date(2024, 8, 15), user=user2, image_url="https://i.pinimg.com/474x/bc/02/ac/bc02acd737e86ad48986757bd5e717bc.jpg")
    trip3 = Trip(destination="Tokyo", start_date=date(2024, 9, 10), end_date=date(2024, 9, 20), user=user3, image_url="https://i.pinimg.com/736x/9a/3d/7e/9a3d7eed951e9c7aad8301a593099cff.jpg")
    trip4 = Trip(destination="Tokyo", start_date=date(2024, 10, 1), end_date=date(2024, 10, 10), user=user4, image_url="https://i.pinimg.com/474x/98/e9/3d/98e93dcc35ab5efd50c6f30bc249ec79.jpg")
    trip5 = Trip(destination="New York", start_date=date(2024, 11, 5), end_date=date(2024, 11, 15), user=user5, image_url="https://i.pinimg.com/474x/0a/30/72/0a30724a9c46cb22b94412a86442d0f5.jpg")
    trip6 = Trip(destination="New York", start_date=date(2024, 12, 10), end_date=date(2024, 12, 20), user=user6, image_url="https://i.pinimg.com/474x/80/6c/0b/806c0b6e22e117b637843bfe9b9825f7.jpg")
    trip7 = Trip(destination="Sydney", start_date=date(2025, 1, 5), end_date=date(2025, 1, 15), user=user7, image_url="https://i.pinimg.com/474x/12/0c/59/120c590c7434eb1311823568d0357404.jpg")
    trip8 = Trip(destination="Sydney", start_date=date(2025, 2, 10), end_date=date(2025, 2, 20), user=user8, image_url="https://i.pinimg.com/474x/17/39/cf/1739cf64f4aa4039470fe659c6b3835c.jpg")
    trip9 = Trip(destination="Brazil", start_date=date(2025, 3, 1), end_date=date(2025, 3, 10), user=user9, image_url="https://i.pinimg.com/564x/fe/c3/04/fec304a220500dacb82501a27181915d.jpg")
    trip10 = Trip(destination="Brazil", start_date=date(2025, 4, 5), end_date=date(2025, 4, 15), user=user10, image_url="https://i.pinimg.com/474x/6b/03/87/6b0387a4052641c690839808d6709655.jpg")

    trips = [trip1, trip2, trip3, trip4, trip5, trip6, trip7, trip8, trip9, trip10]


    print("Creating categories...")
   
    category1 = Category(name="Sightseeing", image_url="https://i.pinimg.com/474x/42/17/a5/4217a50a083a984755576cfc08429f73.jpg")
    category2 = Category(name="Tour", image_url="https://i.pinimg.com/474x/bc/02/ac/bc02acd737e86ad48986757bd5e717bc.jpg")
    category3 = Category(name="Sightseeing", image_url="https://i.pinimg.com/736x/9a/3d/7e/9a3d7eed951e9c7aad8301a593099cff.jpg")
    category4 = Category(name="Dining", image_url="https://i.pinimg.com/474x/98/e9/3d/98e93dcc35ab5efd50c6f30bc249ec79.jpg")
    category5 = Category(name="Nature", image_url="https://i.pinimg.com/474x/0a/30/72/0a30724a9c46cb22b94412a86442d0f5.jpg")
    category6 = Category(name=" Historic", image_url="https://i.pinimg.com/474x/80/6c/0b/806c0b6e22e117b637843bfe9b9825f7.jpg")
    category7 = Category(name="Relaxation", image_url="https://i.pinimg.com/474x/12/0c/59/120c590c7434eb1311823568d0357404.jpg")
    category8 = Category(name="Sports", image_url="https://i.pinimg.com/474x/17/39/cf/1739cf64f4aa4039470fe659c6b3835c.jpg")
    category9 = Category(name="Sightseeing", image_url="https://i.pinimg.com/564x/fe/c3/04/fec304a220500dacb82501a27181915d.jpg")
    category10 = Category(name="Photography", image_url="https://i.pinimg.com/474x/6b/03/87/6b0387a4052641c690839808d6709655.jpg")

    categories = [category1, category2, category3, category4, category5, category6, category7, category8, category9, category10]



    print("Creating activities...")
    activity1 = Activity(description="Eiffel Tower visit", date=date(2024, 7, 2), time="10:00 AM", cost=25.0, trip=trip1, image_url="https://i.pinimg.com/474x/42/17/a5/4217a50a083a984755576cfc08429f73.jpg")
    activity2 = Activity(description="Seine River Cruise", date=date(2024, 7, 3), time="03:00 PM", cost=50.0, trip=trip1, image_url="https://i.pinimg.com/474x/bc/02/ac/bc02acd737e86ad48986757bd5e717bc.jpg")
    activity3 = Activity(description="Tokyo Tower visit", date=date(2024, 8, 6), time="11:00 AM", cost=20.0, trip=trip2, image_url="https://i.pinimg.com/736x/9a/3d/7e/9a3d7eed951e9c7aad8301a593099cff.jpg")
    activity4 = Activity(description="Sushi dinner", date=date(2024, 8, 7), time="07:00 PM", cost=40.0, trip=trip2, image_url="https://i.pinimg.com/474x/98/e9/3d/98e93dcc35ab5efd50c6f30bc249ec79.jpg")
    activity5 = Activity(description="Central Park visit", date=date(2024, 9, 11), time="09:00 AM", cost=0.0, trip=trip3, image_url="https://i.pinimg.com/474x/0a/30/72/0a30724a9c46cb22b94412a86442d0f5.jpg")
    activity6 = Activity(description="Statue of Liberty tour", date=date(2024, 9, 12), time="10:00 AM", cost=30.0, trip=trip3, image_url="https://i.pinimg.com/474x/80/6c/0b/806c0b6e22e117b637843bfe9b9825f7.jpg")
    activity7 = Activity(description="Sydney Opera House visit", date=date(2024, 10, 2), time="11:00 AM", cost=35.0, trip=trip4, image_url="https://i.pinimg.com/474x/12/0c/59/120c590c7434eb1311823568d0357404.jpg")
    activity8 = Activity(description="Bondi Beach day", date=date(2024, 10, 3), time="09:00 AM", cost=0.0, trip=trip4, image_url="https://i.pinimg.com/474x/17/39/cf/1739cf64f4aa4039470fe659c6b3835c.jpg")
    activity9 = Activity(description="Christ the Redeemer visit", date=date(2024, 11, 6), time="10:00 AM", cost=25.0, trip=trip5, image_url="https://i.pinimg.com/564x/fe/c3/04/fec304a220500dacb82501a27181915d.jpg")
    activity10 = Activity(description="Sugarloaf Mountain cable car", date=date(2024, 11, 7), time="02:00 PM", cost=30.0, trip=trip5, image_url="https://i.pinimg.com/474x/6b/03/87/6b0387a4052641c690839808d6709655.jpg")

    activities = [activity1, activity2, activity3, activity4, activity5, activity6, activity7, activity8, activity9, activity10]
    print("Creating activity categories...")
    activity_category1 = Activity_Category(activity=activity1, category=category1)  # Eiffel Tower visit - Sightseeing
    activity_category2 = Activity_Category(activity=activity2, category=category2)  # Seine River Cruise - Tour
    activity_category3 = Activity_Category(activity=activity3, category=category3)  # Tokyo Tower visit - Sightseeing
    activity_category4 = Activity_Category(activity=activity4, category=category4)  # Sushi dinner - Dining
    activity_category5 = Activity_Category(activity=activity5, category=category1)  # Central Park visit - Sightseeing
    activity_category6 = Activity_Category(activity=activity6, category=category6)  # Statue of Liberty tour - Historic
    activity_category7 = Activity_Category(activity=activity7, category=category1)  # Sydney Opera House visit - Sightseeing
    activity_category8 = Activity_Category(activity=activity8, category=category7)  # Bondi Beach day - Relaxation
    activity_category9 = Activity_Category(activity=activity9, category=category1)  # Christ the Redeemer visit - Sightseeing
    activity_category10 = Activity_Category(activity=activity10, category=category6)  # Sugarloaf Mountain cable car - Historic

    activity_categories = [
        activity_category1, activity_category2, activity_category3, activity_category4,
        activity_category5, activity_category6, activity_category7, activity_category8,
        activity_category9, activity_category10
    ]
    db.session.add_all(users)
    db.session.add_all(trips)
    db.session.add_all(categories)
    db.session.add_all(activities)
    db.session.add_all(activity_categories)
    db.session.commit()

    print("Seeding done!")

