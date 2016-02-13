'use strict';

import React, {
  Text,
  View,
  StyleSheet,
  AppRegistry
} from 'react-native';

const StopWatch = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text>00:00:00</Text>
          </View>
          <View>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>
        <View style={styles.footer}>
          <Text>I am a list of laps</Text>
        </View>
      </View>
    );
  },
  startStopButton: function() {
    return (
      <View>
        <Text>Start</Text>
      </View>
    );
  },
  lapButton: function() {
    return (
      <View>
        <Text>Lap</Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1, // fill the entire screen
    alignItems: 'stretch'
  },
  header: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  footer: {
    flex: 1,
    backgroundColor: 'blue'
  },
  timer: {
    backgroundColor: 'red'
  },
  buttons: {
    backgroundColor: 'green'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
