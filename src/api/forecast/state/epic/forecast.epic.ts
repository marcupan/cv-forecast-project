import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Action } from 'ts-action';
import { ofType, toPayload } from 'ts-action-operators';

import {
  getForecastItem$,
  getForecastList$
} from 'api/forecast/service/forecast.service';
import {
  foreacastItemLoadAction,
  foreacastListLoadAction,
  forecastItemLoadFailedAction,
  forecastItemLoadSuccessAction,
  forecastListLoadFailedAction,
  forecastListLoadSuccessAction
} from 'api/forecast/state/action/forecast.action';

const forecastItemLoadEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(foreacastItemLoadAction),
    toPayload(),
    switchMap((id) =>
      getForecastItem$(id).pipe(
        map(forecastItemLoadSuccessAction),
        catchError(() => [
          forecastItemLoadFailedAction('Error while fetching forecast item'),
        ]),
      ),
    ),
  );

const forecastListLoadEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(foreacastListLoadAction),
    switchMap(() =>
      getForecastList$().pipe(
        map(forecastListLoadSuccessAction),
        catchError(() => [
          forecastListLoadFailedAction('Error while fetching forecast list'),
        ]),
      ),
    ),
  );

export const forecastEpic = combineEpics(
  forecastItemLoadEpic,
  forecastListLoadEpic,
);
