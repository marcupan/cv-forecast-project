import {StyleSheet} from 'react-native';

import {shadowStyles} from 'api/forecast/const';

const cardHeight = 230;

export const ForecastCardSideStyles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    height: cardHeight,
    ...shadowStyles,
  },
  wrapper: {
    flex: 1,
  },
  button: {
    width: '100%',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
});
