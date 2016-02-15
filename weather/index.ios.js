'use strict';

import React, {
  AppRegistry,
  View,
  StyleSheet,
  MapView
} from 'react-native';

const Weather = React.createClass({
  getInitialState: function() {
    return {
      pin: {
        latitude: 0,
        longitude: 0
      }
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
  }
});

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
