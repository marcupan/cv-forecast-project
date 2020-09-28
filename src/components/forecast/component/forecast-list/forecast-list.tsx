import React, {useCallback, useRef} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';

import {ForecastItemInterface} from 'api/forecast/interface/forecast.interface';
import {ForecastItem} from 'components/forecast/component/forecast-item/forecast-item';
import {emptyFn, OnEventFn} from 'components/shared/type/event.type';
import {listItemPadding} from 'api/forecast/const';

import {ForecastListStyles} from './forecast-list.styles';

interface Props {
  list: ForecastItemInterface[];
  onSelect?: OnEventFn<number>;
}

export const ForecastList = ({list = [], onSelect = emptyFn}: Props) => {
  const listRef = useRef<FlatList>(null);

  const handlePress = useCallback(
    (index: number) => () => {
      onSelect(index);
      listRef.current?.scrollToIndex({index, viewOffset: 2 * listItemPadding});
    },
    [],
  );

  const renderDivider = () => <View style={ForecastListStyles.divider} />;
  const renderItem = ({
    item,
    index,
  }: ListRenderItemInfo<ForecastItemInterface>) => (
    <ForecastItem item={item} onPress={handlePress(index)} />
  );

  return (
    <FlatList
      ref={listRef}
      data={list}
      keyExtractor={(item) => `forecast-item-${item.id}`}
      renderItem={renderItem}
      horizontal={true}
      bounces={false}
      contentContainerStyle={ForecastListStyles.container}
      ItemSeparatorComponent={renderDivider}
      ListHeaderComponent={renderDivider}
      ListFooterComponent={renderDivider}
    />
  );
};
