const mongoose = require('mongoose');

// mongoose.connect('mongodb://database/welp');
mongoose.connect('mongodb://localhost/welp');

const menuItemsSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  category: String,
  price: Number,
  reviewIds: [String],
  photoIds: [String],
});

const Menus = mongoose.model('Menu', menuItemsSchema);

module.exports = Menus;
