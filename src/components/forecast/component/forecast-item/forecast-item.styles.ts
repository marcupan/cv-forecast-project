import {StyleSheet} from 'react-native';

import {shadowStyles} from 'api/forecast/const';

export const ForecastItemStyles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  wrapper: {
    position: 'relative',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 80,
    width: 80,
    borderRadius: 5,
    ...shadowStyles,
  },
  icon: {
    height: '80%',
    width: '80%',
  },
  title: {
    fontSize: 12,
    marginTop: 5,
  },
  textWrapper: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 10,
    bottom: 10,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
  },
});
