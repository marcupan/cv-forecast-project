import {useDispatch} from 'react-redux';
import {useEffect} from 'react';

import {ForecastItemInterface} from 'api/forecast/interface/forecast.interface';
import {useForecastListSelector} from 'api/forecast/selector/forecast-list.selector';
import {foreacastListLoadAction} from 'api/forecast/state/action/forecast.action';

export const useForecastList = (): [
  ForecastItemInterface[],
  boolean,
  string,
] => {
  const dispatch = useDispatch();
  const forecastList = useForecastListSelector();

  useEffect(() => void dispatch(foreacastListLoadAction()), []);

  return forecastList;
};
