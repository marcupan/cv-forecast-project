import Config from 'react-native-config';
import {fromFetch} from 'rxjs/fetch';

export const fetchForecast = (params: string) =>
  fromFetch(`${Config.API_URL}${params}&appid=${Config.API_KEY}&units=metric`, {
    selector: (response) => response.json(),
  });
