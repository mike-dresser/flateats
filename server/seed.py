import random
from app import app
from models import db, User, Restaurant, Review 

with app.app_context():

    #delete all data points from all tables
    print('deleting all data...')
    User.query.delete()
    Restaurant.query.delete()
    Review.query.delete()

    # add some users
    print('adding users...')
    users = [
        User(
            username="mikeymouse", 
            password="abc"
        ), 
        User(
            username="yeth2seth", 
            password="abc"
        ),
        User(
            username="slambam", 
            password="abc"
        )

        # User (
        #     username="", 
        #     password=""
        # )
    ]

    

    db.session.add_all(users)
    db.session.commit()

    # add some restaurants
    print('adding restaurants...')
    restaurants = [
        Restaurant(
            name = "Chipotle", 
            distance_time = "3", 
            price = "2", 
            cuisine = "mexican, fast-food", 
            pos_lat = "40.7047946", 
            pos_lon = "-74.0144023",
            image = "https://lh5.googleusercontent.com/p/AF1QipPSvvqVfLwDsE_u4euCapUVyahmT13OlLgpev7M=w408-h306-k-no"
        ),
        Restaurant(
            name = "Subway", 
            distance_time = "1", 
            price = "2", 
            cuisine = "american, sandwiches", 
            pos_lat = "40.7051201", 
            pos_lon = "-74.0144287",
            image = "https://lh5.googleusercontent.com/p/AF1QipPLzmsudzLMGAZRMR2ep_r8ONme5G1lPAfSWUaV=w408-h725-k-no"
        ),
        Restaurant(
            name = "Liberty Bagels", 
            distance_time = "2", 
            price = "2", 
            cuisine = "american, sandwich, breakfast", 
            pos_lat = "40.7059395", 
            pos_lon = "-74.0131574",
            image = "https://lh5.googleusercontent.com/p/AF1QipOSVsAl4Mzhq6LzUphugVf-LIacRwl92kQCfb4=w408-h544-k-no"
        ),
        Restaurant(
            name = "Continental Express Halal Food", 
            distance_time = "3", 
            price = "1", 
            cuisine = "middle-eastern, halal", 
            pos_lat = "40.7049238", 
            pos_lon = "-74.0125789",
            image = 'https://lh5.googleusercontent.com/p/AF1QipObjHJDVHJ-63ezgBgTKbwDhye2ANsb2M0MY9Zh=w408-h306-k-no'
        ),
        Restaurant(
            name = "Burger King", 
            distance_time = "3", 
            price = "2", 
            cuisine = "american, burger", 
            pos_lat = "40.7049236", 
            pos_lon = "-74.0125784",
            image = "https://lh5.googleusercontent.com/p/AF1QipNgy-R7EDtPBMwcbCtwiKWkUclXL1WDrOkC8-ma=w408-h544-k-no"
        ),
         Restaurant (
            name = "Pisillo Italian Panini", 
            distance_time = "13", 
            price = "2", 
            cuisine = "italian, panini", 
            pos_lat = "40.7079249", 
            pos_lon = "-74.0132937",
            image = "https://lh3.googleusercontent.com/p/AF1QipMm63jOB-QIJkSgzp9W_mjTyZo6_5pvk8COAyPU=s680-w680-h510"
        ),      
        Restaurant (
            name = "West Bank Gourmet", 
            distance_time = "8", 
            price = "2", 
            cuisine = "sandwiches, subs", 
            pos_lat = "40.7063636", 
            pos_lon = "-74.015617",
            image = "https://lh3.googleusercontent.com/p/AF1QipOl1NHQtX1UThOp0RUNSurBrzWlaaFdyiBTWGEx=s680-w680-h510"
        ),
        Restaurant (
            name = "Naya - Fidi", 
            distance_time = "6", 
            price = "2", 
            cuisine = "mediterannean, bowl", 
            pos_lat = "40.7059467", 
            pos_lon = "-74.0146192",
            image = "https://lh5.googleusercontent.com/p/AF1QipOLXJEHO1blqtJhn_RBrGhOHh89aAdZtQ6YHrd4=w408-h306-k-no"
        ),
        Restaurant (
            name = "Cava", 
            distance_time = "8", 
            price = "2", 
            cuisine = "mediterannean, bowl", 
            pos_lat = "40.7061888", 
            pos_lon = "-74.0128002",
            image = "https://lh5.googleusercontent.com/p/AF1QipPWdQdHCwG0mYDk5QmhHxanl-pOgS4ujL8t8Ekf=w408-h306-k-no"
        ),
        Restaurant (
            name = "Xi’an Famous Foods", 
            distance_time = "9", 
            price = "2", 
            cuisine = "chinese, noodles, dumplings", 
            pos_lat = "40.7075032", 
            pos_lon = "-74.0141698",
            image = "https://lh5.googleusercontent.com/p/AF1QipNKT3WJaNiomzAf2GkJ6UcsTa7_SoOgZUXNMPgy=w408-h307-k-no"
        ),
        Restaurant (
            name = "Sticky’s", 
            distance_time = "10", 
            price = "2", 
            cuisine = "american, kids", 
            pos_lat = "40.7076008", 
            pos_lon = "-74.0140323",
            image = "https://lh5.googleusercontent.com/p/AF1QipPlX34to5xzsa78wxXOIR8UAmkFF_H9vR66aLAS=w408-h272-k-no"
        ),
        Restaurant (
            name = "Sienna Pizza", 
            distance_time = "6", 
            price = "2", 
            cuisine = "pizza, italian", 
            pos_lat = "40.7081484", 
            pos_lon = "-74.0151853",
            image = "https://lh5.googleusercontent.com/p/AF1QipMlREwwTBzsPdvB0I1Y0S6fpWXyoerPYDqhzAul=w408-h544-k-no"
        ),
        Restaurant (
            name = "Sam's Falafel Stand", 
            distance_time = "7", 
            price = "2", 
            cuisine = "middle eastern, vegetarian", 
            pos_lat = "40.7071355", 
            pos_lon = "-74.0150023",
            image = "https://lh5.googleusercontent.com/p/AF1QipOfdu0JwT0Sqo4AIbTAhpCaSrFlDHxswS7Aeac=w408-h544-k-no"
        ),
        Restaurant (
            name = "Dominic's", 
            distance_time = "4", 
            price = "2", 
            cuisine = "italian, sausage", 
            pos_lat = "40.7043883", 
            pos_lon = "-74.0161481",
            image = "https://lh5.googleusercontent.com/p/AF1QipNm3NAp4W5kEYoiv0iio2bAyvVCWe4pgRYz5uQI=w408-h306-k-no"
        ),
        Restaurant (
            name = "Chick-Fil-A", 
            distance_time = "11", 
            price = "2", 
            cuisine = "american homophobic, sandwich", 
            pos_lat = "40.7083736", 
            pos_lon = "-74.0137637",
            image = "https://lh3.googleusercontent.com/p/AF1QipMbPwWh8pqi58DX5HtZgBpHmZVL4mZIth51x97q=s680-w680-h510"
        ),
        Restaurant (
            name = "Blue Park Kitchen", 
            distance_time = "11", 
            price = "2", 
            cuisine = "american, bowls", 
            pos_lat = "40.706854", 
            pos_lon = "-74.0119892",
            image = "https://lh5.googleusercontent.com/p/AF1QipNvPuqH251_Vufr0qyzx2r92FMbi29mGXMhlocB=w408-h510-k-no"
        ),
        Restaurant (
            name = "Urbanspace Pearl", 
            distance_time = "8", 
            price = "3", 
            cuisine = "misc", 
            pos_lat = "40.7041898", 
            pos_lon = "-74.0132746",
            image = "https://lh5.googleusercontent.com/p/AF1QipNhtziTFTik7xO5w9jX42EBds8H0lFnSRapn6A=w408-h272-k-no"
        )
        # Restaurant (
        #     name = "", 
        #     distance_time = "", 
        #     price = "", 
        #     cuisine = "", 
        #     pos_lat = "", 
        #     pos_lon = "",
        #     image = ""
        # )
    ]

    for restaurant in restaurants:
        db.session.add(restaurant)

    db.session.commit()

    #add some reviews
    print('adding reviews...')
    reviews = [
        Review (
            rating = "2",
            title = "Burger Peasant",
            body = "I had a terrible experience at the Burger King near Flatiron. My 'Whopper' was a whopping failure. Lame lettuce. Terrible tomato. Bastardized burger. The only redeeming factor was the onion rings. #vegetablesrock.",
            user_id = "1",
            restaurant_id = "5"
        ),
        Review (
            rating = "5",
            title = "Continental - should be Continentally Known!",
            body = "My oh my, did the Continental Halal surpass my expectations! THe food portions are enormous, and it's really one of the cheapest options around. Fun fact: double meat for only 2 dollars extra! I had their chicken over rice, with plenty of their spicy sauce. Mohammad is a fantastic chef, make sure to eat plenty there!",
            user_id = "2",
            restaurant_id = "4"
        ),
        Review (
            rating = "4",
            title = "Let Freedom Ring @Liberty Bagels",
            body = "I saw Liberty Bagels all over Tiktok, and absolutely had to try them out. They did not disappoint. Not only are their bagels big, fluffy, but they respect the SCHMEAR over there. I found myself humming the Star Spangled Banner as I was eating it, that bagel made me patriotic! Let Freedom Ring, baby!",
            user_id = "3",
            restaurant_id = "3"
        ),
        Review (
            rating = "5",
            title = "Chipotle is for the Chaps!",
            body = "Hey y'all, idk if you've ever heard of this fine establishment called Chipotle, but it just BLEW MY MIND. First of all, the portion sizes? 10/10, I couldn't even finish my bowl! And the taste was making me go 'MMM MMM MMM.' If you ever want authentic Mexican cuisine, give Chipotle a try! A taste of Mexico!",
            user_id = "2",
            restaurant_id = "1"
        ),
        Review (
            rating = "1",
            title = "Subways are where the rats reside.",
            body = "The title says a lot already. Low quality meats, low quality food, but fantastic workers. I recommend you do NOT use the public bathrooms there, I'm convinced it's a biohazard. If health inspectors saw that bathroom, they would lose their A rating faster than you can say '5 dolla foot long.'",
            user_id = "3",
            restaurant_id = "2"
        )

        # Review (
        #     rating = "",
        #     title = "",
        #     body = "",
        #     created_at = "",
        #     updated_at = "",
        #     user_id = "",
        #     restaurant_id = ""
        # )
    ]    
    for review in reviews:
        db.session.add(review)
    
    db.session.commit()
    


    # if __name__ == '__main__':
    #     with app.app_context():
    #         run()