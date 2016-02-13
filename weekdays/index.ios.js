'use strict';

import React, {
  AppRegistry,
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';

import DayItem from './src/day-item'
import Moment from 'moment';

class Weekdays extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.days()}
      </View>
    )
  }

  days() {
    var daysItems = [];
    for (var i = 0; i < 7; i++) {
      let day = Moment().add(i, 'days');
      let weekday = day.format('dddd');
      daysItems.push(<DayItem key={weekday.toLowerCase()} day={weekday} daysUntil={i}/>)
    }
    return daysItems;
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
