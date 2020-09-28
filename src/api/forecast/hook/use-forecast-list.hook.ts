import {useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';

import {foreacastListLoadAction} from 'api/forecast/state/action/forecast.action';
import {ForecastItemInterface} from 'api/forecast/interface/forecast.interface';
import {useForecastSelector} from 'api/forecast/selector/forecast-list.selector';

export const useForecastList = (): [
  ForecastItemInterface[],
  boolean,
  string,
] => {
  const dispatch = useDispatch();
  const forecastList = useForecastSelector();
  const timeout = useRef(0);
  const inTimeout = useRef(false);

  useEffect(() => {
    !inTimeout.current && dispatch(foreacastListLoadAction());

    inTimeout.current = true;
    timeout.current = setTimeout(() => (inTimeout.current = false));

    return () => clearTimeout(timeout.current);
  }, []);

  return forecastList;
};
