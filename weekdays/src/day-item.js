'use strict';

import React, {
  Component,
  StyleSheet,
  Text
} from 'react-native';

export default class DayItem extends Component {
  render() {
    return (
      <Text style={styles.day}>
        {this.props.day}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#000FFF'
  }
});
