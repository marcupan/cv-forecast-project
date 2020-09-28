import {EntityLoadable} from './entity-loadable.interface';

interface WeatherItem {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainForecastData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface WindForecastData {
  speed: number;
  deg: number;
}

interface CoordForecastData {
  lon: number;
  lat: number;
}

interface SysForecastData {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface CloudsForecastData {
  all: number;
}

export interface ForecastItemInterface {
  id: number;
  name: string;
  cod: number;
  base: string;
  dt: number;
  timezone: number;
  visibility: number;
  coord: CoordForecastData;
  weather: WeatherItem[];
  main: MainForecastData;
  wind: WindForecastData;
  sys: SysForecastData;
  clouds: CloudsForecastData;
}

export interface ForecastListResponse {
  cnt: number;
  list: ForecastItemInterface[];
}

export interface ForecastRootState {
  item: EntityLoadable<ForecastItemInterface>;
  list: EntityLoadable<ForecastItemInterface[]>;
}
