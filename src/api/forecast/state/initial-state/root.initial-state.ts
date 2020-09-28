import {RootState} from 'api/forecast/interface/root.interface';

import {forecastInitialState} from './forecast.initial-state';

export const rootInitialState: RootState = {
  forecast: forecastInitialState,
};
