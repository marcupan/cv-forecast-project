import Config from 'react-native-config';

import {ForecastItemInterface} from 'api/forecast/interface/forecast.interface';

export const getForecastImageUrl = ({weather}: ForecastItemInterface) =>
  `${Config.API_IMAGE_URL}${weather[0].icon}@2x.png`;
