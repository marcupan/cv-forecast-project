import React, {useCallback} from 'react';
import {
  GestureResponderEvent,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';

import {ForecastItemInterface} from 'api/forecast/interface/forecast.interface';
import {getForecastImageUrl} from 'components/forecast/util/image.util';
import {emptyFn, OnEventFn} from 'components/shared/type/event.type';

import {ForecastItemStyles} from './forecast-item.styles';

interface Props {
  item: ForecastItemInterface;
  onPress?: OnEventFn<GestureResponderEvent>;
}

export const ForecastItem = ({item, onPress = emptyFn}: Props) => {
  const pressableStyles = useCallback(
    ({pressed}) => [
      ForecastItemStyles.wrapper,
      {
        shadowOpacity: pressed ? 0.05 : 0.25,
        elevation: pressed ? 1 : 5,
      },
    ],
    [],
  );

  return (
    <View style={ForecastItemStyles.root}>
      <Pressable onPress={onPress} style={pressableStyles}>
        <Image
          source={{uri: getForecastImageUrl(item)}}
          style={ForecastItemStyles.icon}
        />
        <View style={ForecastItemStyles.textWrapper}>
          <Text style={ForecastItemStyles.text}>{item.main.temp} °C</Text>
        </View>
      </Pressable>
      <Text style={ForecastItemStyles.title}>{item.name}</Text>
    </View>
  );
};
