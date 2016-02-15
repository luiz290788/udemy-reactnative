'use strict';

import React, {
  fetch
} from 'react-native';

const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=f1c9da0fce63c1c758fa825a2cfeace0';

export default function openWeather (latitude, longitude) {
  var url = `${apiUrl}&lat=${latitude}&lon=${longitude}`;
  
}
