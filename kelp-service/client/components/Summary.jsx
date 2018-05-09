import React from 'react';
import PropTypes from 'prop-types';

const Prices = {
  1: 'under $10',
  2: '$11-30',
  3: '$31-60',
  4: 'above $61',
};

// TODO: Icons
const Summary = (props) => {
  const today = (props.today.hoursOpen !== '') &&
    <div className="today">
      <dl>
        <dt>Today</dt>
        <dd>{props.today.hoursOpen}
          { props.today.isOpen ?
            <div className="is-open-true">Open now</div> :
            <div className="is-open-false">Closed now</div>
          }
        </dd>
      </dl>
    </div>;

  const menu = (typeof props.menu !== 'undefined') &&
    <div className="menu"><dl><dt><a href={props.menu}>Full Menu</a></dt></dl></div>;

  const price = (typeof props.price !== 'undefined') &&
    <div className="price"><dl><dt>Price Range</dt><dd>{Prices[props.price]}</dd></dl></div>;

  return (
    <div className="summary">
      {today}
      {menu}
      {price}
    </div>
  );
};

Summary.propTypes = {
  today: PropTypes.shape({
    dayOfWeek: PropTypes.string,
    hoursOpen: PropTypes.string,
    isOpen: PropTypes.string,
  }),
  price: PropTypes.number,
}.isRequired;

export default Summary;
