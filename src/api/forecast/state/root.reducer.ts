import {combineReducers} from 'redux';

import {RootState} from 'api/forecast/interface/root.interface';

import {forecastReducer} from './reducer/forecast.reducer';

export const rootReducer = combineReducers<RootState>({
  forecast: forecastReducer,
});
