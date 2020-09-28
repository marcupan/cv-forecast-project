import React from 'react';
import {Text} from 'react-native';

import {useForecastItemSelector} from 'api/forecast/selector/forecast-item.selector';
import {emplyForecastItem} from 'api/forecast/state/empty-data/empty-forecast';
import {getFormatedDate} from 'components/forecast/util/date.util';
import {Loader} from 'components/shared/component/loader/loader';
import {isTextStr} from 'components/shared/util/text.util';

import {SearchResultStyles} from './search-result.styles';

export const SearchResult = () => {
  const [forecastItem, isLoading, error] = useForecastItemSelector();
  const {id, dt, name, main, sys} = forecastItem;

  const title = `${name}, ${sys.country}`;
  const today = getFormatedDate(dt);

  const renderResults = () =>
    id === emplyForecastItem.id && !isTextStr(error) ? (
      <Text style={SearchResultStyles.text}>Please enter city to search</Text>
    ) : (
      <Loader isLoading={isLoading}>
        <Text style={SearchResultStyles.title}>{title}</Text>
        <Text style={SearchResultStyles.text}>Date: {today}</Text>
        <Text style={SearchResultStyles.text}>Temp: {main.temp}</Text>
        <Text style={SearchResultStyles.text}>
          Feels like: {main.feels_like}
        </Text>
        <Text style={SearchResultStyles.text}>
          Min / Max: {main.temp_min} / {main.temp_max}
        </Text>
        <Text style={SearchResultStyles.text}>Pressure: {main.pressure}</Text>
      </Loader>
    );
  const renderError = () =>
    isTextStr(error) && (
      <Text style={SearchResultStyles.text}>Nothing found</Text>
    );

  return (
    <>
      {renderResults()}
      {renderError()}
    </>
  );
};
