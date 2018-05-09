COPY restaurants FROM '/Users/andrew/HackReactor/SDC/restaurants1.txt' DELIMITER '|';

COPY menus FROM '/Users/andrew/HackReactor/SDC/menus1.txt' DELIMITER '|';

-- COPY restaurants (restaurantsPriceRange2, dessert, latenight, lunch, dinner, breakfast, brunch, romantic, intimate, classy, hipster, divey, touristy, trendy, upscale, casual, restaurantsTableService, restaurantsGoodForGroups, restaurantsReservations, restaurantsAttire, restaurantsDelivery, restaurantsTakeOut, caters, alcohol, hasTV, wiFi, noiseLevel, goodForKids, dogsAllowed, outdoorSeating, businessAcceptsCreditCards, wheelchairAccessible, bikeParking, garage, street, validated, lot, valet, id, name, neighborhood, address, city, state, postalCode, latitude, longitude, stars, reviewCount, isOpen, categories, monday, tuesday, wednesday, thursday, friday, saturday, sunday)
--     FROM 'restaurants1.txt'
--     DELIMITER '|';

-- COPY menus (id, name, description, category, price, reviewIds, photoIds)
--     FROM 'menus1.txt'
--     DELIMITER '|';

    