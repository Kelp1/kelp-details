const siege = require('siege');

siege()
  .on(3002)
  .concurrent(675)
  .for(1000000).times
  .get('http://localhost:3002/api/details/948373')
  .attack();
