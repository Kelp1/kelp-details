import React from 'react';
import PropTypes from 'prop-types';
import Raven from 'raven-js';
import axios from 'axios';
import moment from 'moment-timezone';
import GOOGLE_MAPS_API_KEY from '../../server/config';

const HoursToday = {
  dayOfWeek: '',
  hoursOpen: '',
  isOpen: '',
};

class Hours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timezone: '',
    };
  }
  componentDidMount() {
    axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${this.props.latitude},${this.props.longitude}&timestamp=${moment().format('X')}&key=${GOOGLE_MAPS_API_KEY}`)
      .then((response) => {
        this.setState({ timezone: response.data });
        this.props.updateHours();
      })
      .catch((error) => {
        Raven.captureException(error);
      });
  }

  render() {
    if (!this.state.timezone) { return ''; }
    if (!this.props.hours) { return ''; }
    return (
      <div className="hours">
        <h3>Hours</h3>
        <table>
          <tbody>
            { ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((dayOfWeek) => {
              const open = moment(`${this.props.hours[dayOfWeek].split('-')[0]}'`, 'HH:mm Z').tz(this.state.timezone.timeZoneId);
              const close = (this.props.hours[dayOfWeek].split('-')[1].split(':')[0] <= 12) ?
                moment(`${this.props.hours[dayOfWeek].split('-')[1]}`, 'HH:mm Z').add(1, 'days').tz(this.state.timezone.timeZoneId) :
                moment(`${this.props.hours[dayOfWeek].split('-')[1]}`, 'HH:mm Z').tz(this.state.timezone.timeZoneId);
              const hoursOpen = (this.props.hours[dayOfWeek] === '0:00-0:00') ? '24/7' : `${open.format('h:mm a')} - ${close.format('h:mm a')}`;
              if (dayOfWeek === moment().format('dddd').toLowerCase()) {
                HoursToday.dayOfWeek = dayOfWeek;
                HoursToday.hoursOpen = hoursOpen;
                HoursToday.isOpen = moment().isBetween(open, close);
              }
              return (
                <tr key={dayOfWeek}>
                  <td className="day-of-week">{dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1, 3)}</td>
                  <td className="hours-open">{hoursOpen}</td>
                  { dayOfWeek === HoursToday.dayOfWeek && (
                    HoursToday.isOpen ?
                      <td className="is-open-true">Open now</td> :
                      <td className="is-open-false">Closed now</td>
                  )}
                </tr>
              );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

Hours.propTypes = {
  hours: PropTypes.shape({
    monday: PropTypes.string,
    tuesday: PropTypes.string,
    wednesday: PropTypes.string,
    thursday: PropTypes.string,
    friday: PropTypes.string,
    saturday: PropTypes.string,
    sunday: PropTypes.string,
  }),
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  updateHours: PropTypes.func,
};

Hours.defaultProps = {
  hours: undefined,
  latitude: 0,
  longitude: 0,
  updateHours: () => {},
};

export { Hours, HoursToday };
