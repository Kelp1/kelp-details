require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');
const Restaurants = require('../database/Restaurants');
const Menus = require('../database/Menus');
const bluebird = require('bluebird');
const redis = require('redis');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
const redisClient = redis.createClient(6379, 'localhost');

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const app = express();
  app.set('port', 3002);
  app.listen(app.get('port'));

  app.use(express.static(path.join(__dirname, '/../public')));
  app.use(cors());

  app.get('/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '/../kelp-service/public/index.html'));
  });

  app.get('/api/details/:id', (req, res) => {
    const restId = `${req.params.id}-r`;
    redisClient.getAsync(restId)
      .then((cachedRestaurant) => {
        if (cachedRestaurant !== null) {
          res.status(200).send(cachedRestaurant);
        } else {
          Restaurants.findOne({ id: req.params.id }, (err, result) => {
            res.send(result);
            const listingString = JSON.stringify(result);
            redisClient.set(restId, listingString);
          });
        }
      });
  });

  app.get('/api/menu/:id', (req, res) => {
    const menId = `${req.params.id}-m`;
    redisClient.getAsync(menId)
      .then((cachedMenu) => {
        if (cachedMenu !== null) {
          res.status(200).send(cachedMenu);
        } else {
          Menus.find({ id: req.params.id }, (err, result) => {
            res.send(result);
            const listingString = JSON.stringify(result);
            redisClient.set(menId, listingString);
          });
        }
      });
  });
}

