const mongoose = require('mongoose');

// mongoose.connect('mongodb://database/welp');
mongoose.connect('mongodb://localhost/welp');

const restaurantDetailsSchema = new mongoose.Schema({
  id: Number,
  hours: {
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String,
  },
  attributes: {
    restaurantsPriceRange2: Number,
    goodForMeal: {
      dessert: Boolean,
      latenight: Boolean,
      lunch: Boolean,
      dinner: Boolean,
      breakfast: Boolean,
      brunch: Boolean,
    },
    ambience: {
      romantic: Boolean,
      intimate: Boolean,
      classy: Boolean,
      hipster: Boolean,
      divey: Boolean,
      touristy: Boolean,
      trendy: Boolean,
      upscale: Boolean,
      casual: Boolean,
    },
    restaurantsTableService: Boolean,
    restaurantsGoodForGroups: Boolean,
    restaurantsReservations: Boolean,
    restaurantsAttire: String,
    restaurantsDelivery: Boolean,
    restaurantsTakeOut: Boolean,
    caters: Boolean,
    alcohol: String,
    hasTV: Boolean,
    wiFi: String,
    noiseLevel: String,
    goodForKids: Boolean,
    dogsAllowed: Boolean,
    outdoorSeating: Boolean,
    businessAcceptsCreditCards: Boolean,
    wheelchairAccessible: Boolean,
    bikeParking: Boolean,
    businessParking: {
      garage: Boolean,
      street: Boolean,
      validated: Boolean,
      lot: Boolean,
      valet: Boolean,
    },
  },
});

const Restaurants = mongoose.model('Restaurant', restaurantDetailsSchema);

module.exports = Restaurants;
