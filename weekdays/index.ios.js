'use strict';

import React, {
  AppRegistry,
  Component,
  View,
  Text
} from 'react-native';

class Weekdays extends Component {
  render() {
    return <View>
    <Text>Days of the week:</Text>
    </View>
  }
}

AppRegistry.registerComponent('weekdays', () => Weekdays);
