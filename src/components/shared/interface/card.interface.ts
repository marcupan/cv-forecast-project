import { StyleProp, ViewStyle } from 'react-native';

import {EmptyFn, RenderFn} from 'components/shared/type/event.type';

export interface CardSideProps {
  onFlip: EmptyFn;
}

export interface CardProps {
  style?: StyleProp<ViewStyle>;
  renderFront: RenderFn<CardSideProps>;
  renderBack: RenderFn<CardSideProps>;
}
