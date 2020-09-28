import {useSelector} from 'react-redux';

import {ForecastItemInterface} from 'api/forecast/interface/forecast.interface';
import {RootState} from 'api/forecast/interface/root.interface';

export const useForecastItemSelector = () =>
  useSelector<RootState, [ForecastItemInterface, boolean, string]>(
    ({
      forecast: {
        item: {isLoading, data, error},
      },
    }) => [data, isLoading, error],
  );
