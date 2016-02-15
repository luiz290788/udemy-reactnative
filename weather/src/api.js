'use strict';

const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=f1c9da0fce63c1c758fa825a2cfeace0';

function kelvinToC(kelvin) {
  return Math.round(kelvin - 273.15) + '˚C';
}

export default function openWeather (latitude, longitude) {
  var url = `${apiUrl}&lat=${latitude}&lon=${longitude}`;
  return fetch(url).then(response => response.json()).then(json => {
    return {
      city: json.name,
      temperature: kelvinToC(json.main.temp),
      description: json.weather[0].description
    }
  });
}
