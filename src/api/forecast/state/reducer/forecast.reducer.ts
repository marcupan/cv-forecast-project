import {reducer, on} from 'ts-action';

import {
  foreacastItemLoadAction,
  forecastItemLoadSuccessAction,
  forecastItemLoadFailedAction,
  forecastItemClearAction,
  foreacastListLoadAction,
  forecastListLoadSuccessAction,
  forecastListLoadFailedAction,
} from 'api/forecast/state/action/forecast.action';
import {forecastInitialState} from 'api/forecast/state/initial-state/forecast.initial-state';
import {ForecastRootState} from 'api/forecast/interface/forecast.interface';
import { emplyForecastItem } from '../empty-data/empty-forecast';

export const forecastReducer = reducer<ForecastRootState>(
  forecastInitialState,
  on(foreacastItemLoadAction, (state) => ({
    ...state,
    item: {
      ...state.item,
      isLoading: true,
    },
  })),
  on(forecastItemLoadSuccessAction, (state, {payload: data}) => ({
    ...state,
    item: {
      ...state.item,
      data,
      isLoading: false,
    },
  })),
  on(forecastItemLoadFailedAction, (state, {payload: error}) => ({
    ...state,
    item: {
      ...state.item,
      error,
      isLoading: false,
    },
  })),
  on(forecastItemClearAction, (state) => ({
    ...state,
    item: {
      ...state.item,
      data: emplyForecastItem,
      isLoading: false,
    },
  })),
  on(foreacastListLoadAction, (state) => ({
    ...state,
    list: {
      ...state.list,
      isLoading: true,
    },
  })),
  on(forecastListLoadSuccessAction, (state, {payload: {list}}) => ({
    ...state,
    list: {
      ...state.list,
      data: list,
      isLoading: false,
    },
  })),
  on(forecastListLoadFailedAction, (state, {payload: error}) => ({
    ...state,
    list: {
      ...state.list,
      error,
      isLoading: false,
    },
  })),
);
