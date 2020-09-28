import {useSelector} from 'react-redux';

import {ForecastItemInterface} from 'api/forecast/interface/forecast.interface';
import {RootState} from 'api/forecast/interface/root.interface';

export const useForecastSelector = () =>
  useSelector<RootState, [ForecastItemInterface[], boolean, string]>(
    ({
      forecast: {
        list: {isLoading, data, error},
      },
    }) => [data, isLoading, error],
  );
