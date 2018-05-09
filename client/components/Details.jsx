import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
  const Caters = ('caters' in props.attributes) &&
    <dl><dt>Caters </dt><dd>{ props.attributes.caters ? 'Yes' : 'No' }</dd></dl>;

  const HasTV = ('hasTV' in props.attributes) &&
    <dl><dt>Has TV </dt><dd>{ props.attributes.hasTV ? 'Yes' : 'No' }</dd></dl>;

  const RestaurantsGoodForGroups = ('restaurantsGoodForGroups' in props.attributes) &&
    <dl><dt>Good For Groups </dt><dd>{ props.attributes.restaurantsGoodForGroups ? 'Yes' : 'No' }</dd></dl>;

  const RestaurantsReservations = ('restaurantsReservations' in props.attributes) &&
    <dl><dt>Takes Reservations </dt><dd>{ props.attributes.restaurantsReservations ? 'Yes' : 'No' }</dd></dl>;

  const OutdoorSeating = ('outdoorSeating' in props.attributes) &&
    <dl><dt>Outdoor Seating </dt><dd>{ props.attributes.outdoorSeating ? 'Yes' : 'No' }</dd></dl>;

  const BusinessAcceptsCreditCards = ('businessAcceptsCreditCards' in props.attributes) &&
    <dl><dt>Accepts Credit Cards </dt><dd>{ props.attributes.businessAcceptsCreditCards ? 'Yes' : 'No' }</dd></dl>;

  const BikeParking = ('bikeParking' in props.attributes) &&
    <dl><dt>Bike Parking </dt><dd>{ props.attributes.bikeParking ? 'Yes' : 'No' }</dd></dl>;

  const RestaurantsDelivery = ('restaurantsDelivery' in props.attributes) &&
    <dl><dt>Delivery </dt><dd>{ props.attributes.restaurantsDelivery ? 'Yes' : 'No' }</dd></dl>;

  const RestaurantsTakeOut = ('restaurantsTakeOut' in props.attributes) &&
    <dl><dt>Take Out </dt><dd>{ props.attributes.restaurantsTakeOut ? 'Yes' : 'No' }</dd></dl>;

  const GoodForKids = ('goodForKids' in props.attributes) &&
    <dl><dt>Good For Kids </dt><dd>{ props.attributes.goodForKids ? 'Yes' : 'No' }</dd></dl>;

  const WiFi = ('wiFi' in props.attributes) &&
    <dl>
      <dt>WiFi </dt>
      <dd>{ props.attributes.wiFi.charAt(0).toUpperCase() + props.attributes.wiFi.slice(1)}</dd>
    </dl>;

  const RestaurantsAttire = ('restaurantsAttire' in props.attributes) &&
    <dl>
      <dt>Attire </dt>
      <dd>{ props.attributes.restaurantsAttire.charAt(0).toUpperCase() + props.attributes.restaurantsAttire.slice(1)}</dd>
    </dl>;

  const NoiseLevel = ('noiseLevel' in props.attributes) &&
    <dl>
      <dt>Noise Level </dt>
      <dd>
        { props.attributes.noiseLevel.split('_')
        .map(word => ((word === 'and') ? '&' : word.charAt(0).toUpperCase() + word.slice(1)))
        .join(' ') }
      </dd>
    </dl>;

  const Alcohol = ('alcohol' in props.attributes) &&
    <dl>
      <dt>Alcohol </dt>
      <dd>
        { props.attributes.alcohol.split('_')
        .map(word => ((word === 'and') ? '&' : word.charAt(0).toUpperCase() + word.slice(1)))
        .join(' ') }
      </dd>
    </dl>;

  const GoodForMeal = ('goodForMeal' in props.attributes) &&
  (Object.values(props.attributes.goodForMeal).includes(true)) &&
    <dl>
      <dt>Good For </dt>
      <dd>
        { Object.keys(props.attributes.goodForMeal)
        .filter(meal => !!props.attributes.goodForMeal[meal])
        .map(meal => meal.charAt(0).toUpperCase() + meal.slice(1))
        .join(', ') }
      </dd>
    </dl>;

  const Ambience = ('ambience' in props.attributes) &&
    (Object.values(props.attributes.ambience).includes(true)) &&
      <dl>
        <dt>Ambience </dt>
        <dd>
          { Object.keys(props.attributes.ambience)
          .filter(type => !!props.attributes.ambience[type])
          .map(type => type.charAt(0).toUpperCase() + type.slice(1))
          .join(', ') }
        </dd>
      </dl>;

  const BusinessParking = ('businessParking' in props.attributes) &&
    (Object.values(props.attributes.businessParking).includes(true)) &&
      <dl>
        <dt>Parking </dt>
        <dd>
          { Object.keys(props.attributes.businessParking)
          .filter(type => !!props.attributes.businessParking[type])
          .map(type => type.charAt(0).toUpperCase() + type.slice(1))
          .join(', ') }
        </dd>
      </dl>;

  return (
    <div className="details">
      <h3>More Business Info</h3>
      {GoodForMeal}
      {Alcohol}
      {Caters}
      {HasTV}
      {RestaurantsGoodForGroups}
      {NoiseLevel}
      {WiFi}
      {RestaurantsAttire}
      {RestaurantsReservations}
      {OutdoorSeating}
      {BusinessAcceptsCreditCards}
      {RestaurantsDelivery}
      {BikeParking}
      {Ambience}
      {RestaurantsTakeOut}
      {GoodForKids}
      {BusinessParking}
    </div>
  );
};

Details.propTypes = {
  attributes: PropTypes.shape({
    caters: PropTypes.bool,
    hasTV: PropTypes.bool,
    restaurantsGoodForGroups: PropTypes.bool,
    restaurantsReservations: PropTypes.bool,
    outdoorSeating: PropTypes.bool,
    businessAcceptsCreditCards: PropTypes.bool,
    bikeParking: PropTypes.bool,
    restaurantsDelivery: PropTypes.bool,
    restaurantsTakeOut: PropTypes.bool,
    goodForKids: PropTypes.bool,
    noiseLevel: PropTypes.string,
    wiFi: PropTypes.string,
    restaurantsAttire: PropTypes.string,
    alcohol: PropTypes.string,
    goodForMeal: PropTypes.shape({
      dessert: PropTypes.bool,
      latenight: PropTypes.bool,
      lunch: PropTypes.bool,
      dinner: PropTypes.bool,
      breakfast: PropTypes.bool,
      brunch: PropTypes.bool,
    }),
    ambience: PropTypes.shape({
      romantic: PropTypes.bool,
      intimate: PropTypes.bool,
      classy: PropTypes.bool,
      hipster: PropTypes.bool,
      divey: PropTypes.bool,
      touristy: PropTypes.bool,
      trendy: PropTypes.bool,
      upscale: PropTypes.bool,
      casual: PropTypes.bool,
    }),
    businessParking: PropTypes.shape({
      garage: PropTypes.bool,
      street: PropTypes.bool,
      validated: PropTypes.bool,
      lot: PropTypes.bool,
      valet: PropTypes.bool,
    }),
  }),
};

Details.defaultProps = {
  attributes: {},
};

export default Details;
