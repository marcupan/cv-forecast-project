import {OnEventFn} from 'components/shared/type/event.type';
import React, {FC} from 'react';
import {
  TouchableOpacity,
  GestureResponderEvent,
  Text,
  View,
} from 'react-native';

import {ForecastCardSideStyles} from './card-side.styles';

interface Props {
  title: string;
  buttonText: string;
  onPress?: OnEventFn<GestureResponderEvent>;
}

export const CardSide: FC<Props> = ({title, buttonText, onPress, children}) => (
  <View style={ForecastCardSideStyles.root}>
    <View style={ForecastCardSideStyles.wrapper}>
      <Text style={ForecastCardSideStyles.title}>{title}</Text>
      {children}
    </View>
    <TouchableOpacity onPress={onPress} style={ForecastCardSideStyles.button}>
      <Text style={ForecastCardSideStyles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  </View>
);
