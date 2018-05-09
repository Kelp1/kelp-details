/* eslint-env browser */
import React from 'react';
import Raven from 'raven-js';
import axios from 'axios';
import queryString from 'query-string';
import Summary from './Summary';
import { Hours, HoursToday } from './Hours';
import MenuPreview from './MenuPreview';
import Details from './Details';
import AWS_PUBLIC_IP from '../../server/aws-ip';

Raven
  .config('https://7f6edf48db67490fa3b5f0e72e26c6e9@sentry.io/1191135')
  .install();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: queryString.parse(window.location.search).id,
      restaurantInfo: '',
      restaurantHoursToday: '',
      restaurantMenu: '',
    };
    this.updateHours = this.updateHours.bind(this);
  }

  componentDidMount() {
    // axios.get(`http://${AWS_PUBLIC_IP}/api/details/${this.state.restaurantId}`)
    axios.get(`http://localhost:3002/api/details/${this.state.restaurantId}`)
      .then((response) => {
        this.setState({ restaurantInfo: response.data });
      })
      .catch((error) => {
        Raven.captureException(error);
      });
      // axios.get(`http://${AWS_PUBLIC_IP}/api/menu/${this.state.restaurantId}`)
      axios.get(`http://localhost:3002/api/menu/${this.state.restaurantId}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ restaurantMenu: response.data });
      })
      .catch((error) => {
        Raven.captureException(error);
      });
  }

  updateHours() {
    this.setState({ restaurantHoursToday: HoursToday });
  }

  render() {
    const summary = this.state.restaurantInfo.hasOwnProperty('attributes') &&
      <Summary
        today={this.state.restaurantHoursToday}
        menu={this.state.restaurantInfo.menuUrl}
        price={this.state.restaurantInfo.attributes.restaurantsPriceRange2}
      />;

    const hours = this.state.restaurantInfo.hasOwnProperty('hours') &&
      <Hours
        hours={this.state.restaurantInfo.hours}
        latitude={this.state.restaurantInfo.latitude}
        longitude={this.state.restaurantInfo.longitude}
        updateHours={this.updateHours}
      />;

    const menu = (this.state.restaurantMenu.length !== 0) &&
      <MenuPreview restaurantId={this.state.restaurantId} restaurantMenu={this.state.restaurantMenu} />;

    const details = this.state.restaurantInfo.hasOwnProperty('attributes') &&
      <Details attributes={this.state.restaurantInfo.attributes} />;

    return (
      <div>
        <h2>{this.state.restaurantInfo.name}</h2>
        {summary}
        {hours}
        {menu}
        {details}
      </div>
    );
  }
}

export default App;
