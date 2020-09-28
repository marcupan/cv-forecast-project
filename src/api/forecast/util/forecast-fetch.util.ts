import Config from 'react-native-config';
import {fromFetch} from 'rxjs/fetch';
import {tap} from 'rxjs/operators';

export const fetchForecast = (params: string) =>
  fromFetch(`${Config.API_URL}${params}&appid=${Config.API_KEY}&units=metric`, {
    selector: (response) => response.json(),
  }).pipe(
    tap((res) => {
      if (res.message) {
        throw new Error(res.message);
      }
    }),
  );
