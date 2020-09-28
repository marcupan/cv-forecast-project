import {ForecastItemInterface} from 'api/forecast/interface/forecast.interface';

const emptyForecastCoord = {
  lon: 0,
  lat: 0,
};

const emptyForecastWeather = {
  id: 0,
  main: '',
  description: '',
  icon: '',
};

const emptyForecastMain = {
  temp: 0,
  feels_like: 0,
  temp_min: 0,
  temp_max: 0,
  pressure: 0,
  humidity: 0,
};

const emptyForecastWind = {
  speed: 0,
  deg: 0,
};

const emptyForecastSys = {
  type: 0,
  id: 0,
  message: 0,
  country: '',
  sunrise: 0,
  sunset: 0,
};

export const emplyForecastItem: ForecastItemInterface = {
  id: 0,
  name: '',
  cod: 0,
  dt: 0,
  base: '',
  visibility: 0,
  timezone: 0,
  clouds: {
    all: 0,
  },
  coord: emptyForecastCoord,
  weather: [emptyForecastWeather],
  main: emptyForecastMain,
  wind: emptyForecastWind,
  sys: emptyForecastSys,
};
