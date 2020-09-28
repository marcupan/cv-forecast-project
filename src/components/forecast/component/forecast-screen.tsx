import React, {useCallback, useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Loader} from 'components/shared/component/loader/loader';
import {useForecastList} from 'api/forecast/hook/use-forecast-list.hook';
import {ScreenView} from 'components/shared/component/screen-view/screen-view';
import {RoutesEnum} from 'components/shared/enum/route.enum';

import {ForecastCard} from './forecast-card/forecast-card';
import {ForecastList} from './forecast-list/forecast-list';
import {ForecastScreenStyles} from './forecast-screen.styles';

export const ForecastScreen = () => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [forecastList, isLoading] = useForecastList();

  const forecastItem = forecastList[selectedIndex];

  const handleNavigate = useCallback(
    () => navigation.navigate(RoutesEnum.SearchScreen),
    [],
  );

  return (
    <ScreenView>
      <Loader isLoading={isLoading}>
        <ForecastList list={forecastList} onSelect={setSelectedIndex} />
        <TouchableOpacity
          onPress={handleNavigate}
          style={ForecastScreenStyles.searchButton}>
          <Text>Search</Text>
        </TouchableOpacity>
        <ForecastCard forecast={forecastItem} />
      </Loader>
    </ScreenView>
  );
};
