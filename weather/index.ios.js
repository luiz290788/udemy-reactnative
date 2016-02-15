'use strict';

import React, {
  AppRegistry,
  View,
  StyleSheet,
  MapView
} from 'react-native';

const Weather = React.createClass({
  render: function() {
    let pins = [{
      latitude: 37,
      longitude: -95
    }];
    return (
      <MapView style={styles.map}
        annotations={pins}
        onRegionChangeComplete={this.onRegionChangeComplete}>
      </MapView>
    );
  },
  onRegionChangeComplete: function(region) {

  }
});

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
