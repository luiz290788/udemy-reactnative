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
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: []
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
          {this.laps()}
        </View>
      </View>
    );
  },
  startStopButton: function() {
    let style = this.state.running ? styles.stopButton : styles.startButton;
    return (
      <TouchableHighlight underlayColor='gray' onPress={this.handleStartPress}
        style={[styles.button, style]}>
        <Text>{this.state.running ? 'Stop' : 'Start'}</Text>
      </TouchableHighlight>
    );
  },
  lapButton: function() {
    return (
      <TouchableHighlight underlayColor='gray' style={styles.button}
        onPress={this.handleLapPress}>
        <Text>Lap</Text>
      </TouchableHighlight>
    );
  },
  handleStartPress: function() {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({
        running: false,
        timeElapsed: null
      });
    } else {
      this.setState({
        startTime: new Date(),
        laps: []
      });

      this.interval = setInterval(() => {
        this.setState({
          running: true,
          timeElapsed: new Date() - this.state.startTime
        });
      }, 30);
    }
  },
  handleLapPress: function() {
    let lap = this.state.timeElapsed;
    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap])
    });
  },
  laps: function() {
    return this.state.laps.map((lap, index) => (
      <View key={index}>
        <Text>
          Lap #{index + 1} {formatTime(lap)}
        </Text>
      </View>
    ))
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
  },
  stopButton: {
    borderColor: '#CC0000'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
