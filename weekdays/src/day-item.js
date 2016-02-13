'use strict';

import React, {
  Component,
  StyleSheet,
  Text
} from 'react-native';

class DayItem extends Component {
  render() {
    return (
      <Text>
        A day of the week
      </Text>
    )
  }
}


AppRegistry.registerComponent('DayItem', () => DayItem);
