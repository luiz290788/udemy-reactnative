'use strict';

import React, {
  Text,
  View,
  StyleSheet,
  AppRegistry,
  TouchableHighlight
} from 'react-native';

const StopWatch = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={[styles.header, this.border('yellow')]}>
          <View style={[styles.timerWrapper, this.border('red')]}>
            <Text>00:00:00</Text>
          </View>
          <View style={[styles.buttonWrapper, this.border('green')]}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>
        <View style={[styles.footer, this.border('blue')]}>
          <Text>I am a list of laps</Text>
        </View>
      </View>
    );
  },
  startStopButton: function() {
    return (
      <TouchableHighlight underlayColor='gray' onPress={this.handleStartPress}>
        <Text>Start</Text>
      </TouchableHighlight>
    );
  },
  lapButton: function() {
    return (
      <TouchableHighlight>
        <Text>Lap</Text>
      </TouchableHighlight>
    );
  },
  handleStartPress: function() {
    
  },
  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 4
    };
  }
});

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1, // fill the entire screen
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
