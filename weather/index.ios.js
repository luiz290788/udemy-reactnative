'use strict';

import React, {
  AppRegistry,
  View,
  StyleSheet,
  Text,
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
      <View style={styles.container}>
        <MapView style={styles.map}
        annotations={[this.state.pin]}
        onRegionChangeComplete={this.onRegionChangeComplete}>
        </MapView>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{this.state.city}</Text>
          <Text style={styles.text}>{this.state.temperature}</Text>
          <Text style={styles.text}>{this.state.description}</Text>
        </View>
      </View>
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
      this.setState(data);
    });
  }
});

const styles = StyleSheet.create({
  map: {
    flex: 2,
    marginTop: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#f5fcff'
  },
  textWrapper: {
    height: 120,
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('weather', () => Weather);
