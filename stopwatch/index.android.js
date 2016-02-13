'use strict';

import React, {
  AppRegistry
} from 'react-native';
import StopWatch from './src/stopwatch';

const app = React.createClass({
  render: function() {
    return (
      <StopWatch/>
    );
  }
});

AppRegistry.registerComponent('stopwatch', () => app)
