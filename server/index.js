const express = require('express');
const path = require('path');
const cors = require('cors');
const Restaurants = require('../database/Restaurants');
const Menus = require('../database/Menus');

const app = express();

app.set('port', 3002);
app.listen(app.get('port'));

app.use(express.static(path.join(__dirname, '/../public')));
app.use(cors());

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.get('/api/details/:id', (req, res) => {
  Restaurants.findOne({ id: req.params.id }, (err, result) => {
    res.send(result);
  });
});

app.get('/api/menu/:id', (req, res) => {
  Menus.find({ id: req.params.id }, (err, result) => {
    res.send(result);
  });
});
