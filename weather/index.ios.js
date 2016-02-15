'use strict';

import React, {
  AppRegistry,
  View,
  StyleSheet,
  MapView
} from 'react-native';

const Weather = React.createClass({
  render: function() {
    return (
      <MapView style={styles.map}
        onRegionChangeComplete={this.onRegionChangeComplete}>
      </MapView>
    );
  },
  onRegionChangeComplete: function(region) {
    console.log(region);
  }
});

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
