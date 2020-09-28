import {Observable} from 'rxjs';

import {
  ForecastItemInterface,
  ForecastListResponse,
} from 'api/forecast/interface/forecast.interface';
import {fetchForecast} from 'api/forecast/util/forecast-fetch.util';
import {citiesIds} from 'api/forecast/const';

export const getForecastItem$ = (
  cityName: string,
): Observable<ForecastItemInterface> => fetchForecast(`weather?q=${cityName}`);

export const getForecastList$ = (): Observable<ForecastListResponse> =>
  fetchForecast(`groupd?id={${citiesIds}}`);
