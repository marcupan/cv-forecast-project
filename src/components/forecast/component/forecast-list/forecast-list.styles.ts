import {StyleSheet} from 'react-native';

import {listItemPadding} from 'api/forecast/const';

export const ForecastListStyles = StyleSheet.create({
  container: {
    paddingVertical: listItemPadding,
  },
  divider: {
    padding: listItemPadding,
  },
});
