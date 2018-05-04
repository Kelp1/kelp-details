CREATE TABLE restaurants (
  -- restaurantsPriceRange2: Math.floor(Math.random() * 4) + 1,
  restaurantsPriceRange2 int,
  -- dessert: Math.random() >= 0.5,
  dessert BIT,
  -- latenight: Math.random() >= 0.5,
  latenight BIT,
  -- lunch: Math.random() >= 0.5,
  lunch BIT,
  -- dinner: Math.random() >= 0.5,
  dinner BIT,
  -- breakfast: Math.random() >= 0.5,
  breakfast BIT,
  -- brunch: Math.random() >= 0.5,
  brunch BIT,
  -- romantic: Math.random() >= 0.5,
  romantic BIT,
  -- intimate: Math.random() >= 0.5,
  intimate BIT,
  -- classy: Math.random() >= 0.5,
  classy BIT,
  -- hipster: Math.random() >= 0.5,
  hipster BIT,
  -- divey: Math.random() >= 0.5,
  divey BIT,
  -- touristy: Math.random() >= 0.5,
  touristy BIT,
  -- trendy: Math.random() >= 0.5,
  trendy BIT,
  -- upscale: Math.random() >= 0.5,
  upscale BIT,
  -- casual: Math.random() >= 0.5,
  casual BIT,
  -- restaurantsTableService: Math.random() >= 0.5,
  restaurantsTableService BIT,
  -- restaurantsGoodForGroups: Math.random() >= 0.5,
  restaurantsGoodForGroups BIT,
  -- restaurantsReservations: Math.random() >= 0.5,
  restaurantsReservations BIT,
  -- restaurantsAttire: attire[Math.floor(Math.random() * attire.length)],
  restaurantsAttire VARCHAR,
  -- restaurantsDelivery: Math.random() >= 0.5,
  restaurantsDelivery BIT,
  -- restaurantsTakeOut: Math.random() >= 0.5,
  restaurantsTakeOut BIT,
  -- caters: Math.random() >= 0.5,
  caters BIT,
  -- alcohol: alcohol[Math.floor(Math.random() * alcohol.length)],
  alcohol VARCHAR,
  -- hasTV: Math.random() >= 0.5,
  hasTV BIT,
  -- wiFi: wifi[Math.floor(Math.random() * wifi.length)],
  wiFi VARCHAR,
  -- noiseLevel: noiseLevel[Math.floor(Math.random() * noiseLevel.length)],
  noiseLevel VARCHAR,
  -- goodForKids: Math.random() >= 0.5,
  goodForKids BIT,
  -- dogsAllowed: Math.random() >= 0.5,
  dogsAllowed BIT,
  -- outdoorSeating: Math.random() >= 0.5,
  outdoorSeating BIT,
  -- businessAcceptsCreditCards: Math.random() >= 0.5,
  businessAcceptsCreditCards BIT,
  -- wheelchairAccessible: Math.random() >= 0.5,
  wheelchairAccessible BIT,
  -- bikeParking: Math.random() >= 0.5,
  bikeParking BIT,
  -- garage: Math.random() >= 0.5,
  garage BIT,
  -- street: Math.random() >= 0.5,
  street BIT,
  -- validated: Math.random() >= 0.5,
  validated BIT,
  -- lot: Math.random() >= 0.5,
  lot BIT,
  -- valet: Math.random() >= 0.5,
  valet BIT,
  -- id: i,
  id INT PRIMARY KEY
  -- name: `${faker.lorem.word()} ${faker.lorem.word()}`,
  name
  -- neighborhood: faker.lorem.word(),
  neighborhood VARCHAR
  -- address: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
  address
  -- city: faker.address.city(),
  city VARCHAR
  -- state: faker.address.stateAbbr(),
  state  VARCHAR
  -- postalCode: faker.address.zipCode(),
  postalCode VARCHAR
  -- latitude: faker.address.latitude(),
  latitude VARCHAR
  -- longitude: faker.address.longitude(),
  longitude VARCHAR
  -- stars: Math.floor(Math.random() * 5) + 1,
  stars VARCHAR
  -- reviewCount: Math.floor(Math.random() * 1000) + 1,
  reviewCount int
  -- isOpen: Math.floor(Math.random() * 1) + 1,
  isOpen BIT
  -- categories: [],
  categories VARCHAR
  -- monday: `${hours[Math.floor(Math.random() * hours.length)]}-${hours[Math.floor(Math.random() * hours.length)]}`,
  monday VARCHAR
  -- tuesday: `${hours[Math.floor(Math.random() * hours.length)]}-${hours[Math.floor(Math.random() * hours.length)]}`,
  tuesday VARCHAR
  -- wednesday: `${hours[Math.floor(Math.random() * hours.length)]}-${hours[Math.floor(Math.random() * hours.length)]}`,
  wednesday VARCHAR
  -- thursday: `${hours[Math.floor(Math.random() * hours.length)]}-${hours[Math.floor(Math.random() * hours.length)]}`,
  thursday VARCHAR
  -- friday: `${hours[Math.floor(Math.random() * hours.length)]}-${hours[Math.floor(Math.random() * hours.length)]}`,
  friday VARCHAR
  -- saturday: `${hours[Math.floor(Math.random() * hours.length)]}-${hours[Math.floor(Math.random() * hours.length)]}`,
  saturday VARCHAR
  -- sunday: `${hours[Math.floor(Math.random() * hours.length)]}-${hours[Math.floor(Math.random() * hours.length)]}`,
  sunday VARCHAR
);

CREATE TABLE menus (
  id INT PRIMARY KEY,
  name VARCHAR,
  description VARCHAR,
  category VARCHAR,
  price INT,
  reviewIds VARCHAR,
  photoIds VARCHAR,
);