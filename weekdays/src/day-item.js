'use strict';

import React, {
  Component,
  Text
} from 'react-native';

export default class DayItem extends Component {
  render() {
    return (
      <Text style={this.style()}>
        {this.props.day}
      </Text>
    )
  }

  style() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  }

  color() {
    let opacity = 1 / (this.props.daysUntil + 1);
    return 'rgba(0,0,0,' + opacity + ')';
  }

  fontWeight() {
    return ((7 - this.props.daysUntil) * 100).toString();
  }

  fontSize() {
    return 60 - 6 * this.props.daysUntil;
  }

  lineHeight() {
    return 70 - 4 * this.props.daysUntil;
  }
}
