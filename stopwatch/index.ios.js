'use strict';

import React, {
  Text,
  View,
  StyleSheet,
  AppRegistry,
  TouchableHighlight
} from 'react-native';

import formatTime from 'minutes-seconds-milliseconds';

const StopWatch = React.createClass({
  getInitialState: function() {
    return {
      timeElapsed: null
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.timerWrapper}>
            <Text style={styles.timer}>
              {formatTime(this.state.timeElapsed)}
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
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
      <TouchableHighlight underlayColor='gray' onPress={this.handleStartPress}
        style={[styles.button, styles.startButton]}>
        <Text>Start</Text>
      </TouchableHighlight>
    );
  },
  lapButton: function() {
    return (
      <TouchableHighlight style={styles.button}>
        <Text>Lap</Text>
      </TouchableHighlight>
    );
  },
  handleStartPress: function() {
    let startTime = new Date();

    setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime
      });
    }, 30);
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
  timer: {
    fontSize: 60
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
