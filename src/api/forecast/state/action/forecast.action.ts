import {action, payload} from 'ts-action';

import {
  ForecastItemInterface,
  ForecastListResponse,
} from '@api/forecast/interface/forecast.interface';

export const foreacastItemLoadAction = action(
  'FORECAST_CITY_ITEM',
  payload<string>(),
);
export const forecastItemLoadSuccessAction = action(
  'FORECAST_CITY_ITEM_SUCCESS',
  payload<ForecastItemInterface>(),
);
export const forecastItemLoadFailedAction = action(
  'FORECAST_CITY_ITEM_FAILED',
  payload<string>(),
);
export const forecastItemClearAction = action('FORECAST_CITY_ITEM_CLEAR');

export const foreacastListLoadAction = action('FORECAST_CITY_LIST');
export const forecastListLoadSuccessAction = action(
  'FORECAST_CITY_LIST_SUCCESS',
  payload<ForecastListResponse>(),
);
export const forecastListLoadFailedAction = action(
  'FORECAST_CITY_LIST_FAILED',
  payload<string>(),
);
