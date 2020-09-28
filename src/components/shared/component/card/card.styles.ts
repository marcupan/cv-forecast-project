import {StyleSheet} from 'react-native';

const cardHeight = 230;

export const CardStyles = StyleSheet.create({
  root: {
    position: 'relative',
    height: cardHeight,
    marginTop: 10,
  },
  side: {
    position: 'absolute',
    backfaceVisibility: 'hidden',
    zIndex: 0,
    right: 0,
    left: 0,
    top: 0,
  },
});
