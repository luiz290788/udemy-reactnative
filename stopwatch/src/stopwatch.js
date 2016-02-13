'use strict';

import React, {
  Text,
  View,
  ListView,
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
      lapsDs: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
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
        <ListView style={styles.footer}
          dataSource={this.state.lapsDs}
          renderRow={this.renderLap}/>
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
        lapsDs: this.state.lapsDs.cloneWithRows([]),
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
    let newLaps = this.state.laps.concat([lap]);
    this.setState({
      startTime: new Date(),
      lapsDs: this.state.lapsDs.cloneWithRows(newLaps),
      laps: newLaps
    });
  },
  renderLap: function(lap, sectionId, rowId, highlightRow) {
    return (
      <View key={rowId} style={styles.lap}>
        <Text style={styles.lapText}>
          Lap #{parseInt(rowId) + 1}
        </Text>
        <Text style={styles.lapText}>
          {formatTime(lap)}
        </Text>
      </View>
    );
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
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lapText: {
    fontSize: 30
  }
});

export default StopWatch;
