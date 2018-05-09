# welp-restaurant-details

A service provided to a parent Yelp restaurant page.

Contains 4 major sub-components: 
1. Summary component that displays hours today, price and a menu link
2. Hours component that renders based off of the time the site is viewed
3. Menu component that is clickable with item photos and descriptions
4. Details component that displays more information about the restaurant

## Related Projects

  - https://github.com/zhujohnny/welp-hrsf93-front-end-capstone
  - https://github.com/hrsf93-welp/welp-restaurant-summary
  - https://github.com/hrsf93-welp/welp-photo-gallery
  - https://github.com/hrsf93-welp/welp-review

## Table of Contents

1. [Usage](#usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

Two ways to start the application:
1. Docker
from within the root directory:
```sh
docker-compose up -d
```
In a browser navigate to [http://localhost:3002/?id=40](http://localhost:3002/?id=40)

2. Install Dependencies and build locally
from within the root directory:
```sh
mongod
npm install
npm run build
npm start
```

## Requirements

__Note:__ Nodemon should be installed globally. Webpack and Mongo are also recommended:
```sh
npm install -g nodemon
npm install -g webpack
npm install -g mongo
```

## Development

These scripts are included in the package.json config:
1. Run webpack and watch for updated files
```sh
npm run react-dev
```
2. Run nodemon and watch for updated files
```sh
npm run server-dev
```
3. Run jest to initialize tests
```sh
npm test
```


