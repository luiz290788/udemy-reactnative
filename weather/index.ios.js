'use strict';

import React, {
  AppRegistry,
  View,
  StyleSheet,
  MapView
} from 'react-native';

import openWeather from './src/api.js';

const Weather = React.createClass({
  getInitialState: function() {
    return {
      pin: {
        latitude: 0,
        longitude: 0
      },
      city: '',
      temperature: '',
      description: ''
    };
  },
  render: function() {
    return (
      <MapView style={styles.map}
        annotations={[this.state.pin]}
        onRegionChangeComplete={this.onRegionChangeComplete}>
      </MapView>
    );
  },
  onRegionChangeComplete: function(region) {
    this.setState({
      pin: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    });

    openWeather(region.latitude, region.longitude).then(data => {
      console.log(data);
      this.setState(data);
    });
  }
});

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
