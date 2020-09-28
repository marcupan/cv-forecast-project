import {emplyForecastItem} from 'api/forecast/state/empty-data/empty-forecast';
import {ForecastRootState} from 'api/forecast/interface/forecast.interface';

export const forecastInitialState: ForecastRootState = {
  item: {
    isLoading: false,
    data: emplyForecastItem,
    error: '',
  },
  list: {
    isLoading: false,
    data: [emplyForecastItem],
    error: '',
  },
};
