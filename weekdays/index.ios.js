'use strict';

import React, {
  AppRegistry,
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';

class Weekdays extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Days of the week:</Text>
      </View>
    )
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
