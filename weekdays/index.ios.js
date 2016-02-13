'use strict';

import React, {
  AppRegistry,
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';

import DayItem from './src/day-item'

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class Weekdays extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Days of the week:</Text>
        {this.days()}
      </View>
    )
  }

  days() {
    return DAYS.map(weekday => <DayItem key={weekday.toLowerCase()} day={weekday}/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // inverts justifyContent and alignItems
    // flexDirection: 'row',

    // controls vertically
    justifyContent: 'center',
    // controls horizontally
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('weekdays', () => Weekdays);
