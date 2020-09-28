import React from 'react';
import {Text} from 'react-native';

import {ForecastItemInterface} from 'api/forecast/interface/forecast.interface';
import {getFormatedDate} from 'components/forecast/util/date.util';
import {CardSide} from 'components/shared/component/card-side/card-side';
import {Card} from 'components/shared/component/card/card';
import {CardSideProps} from 'components/shared/interface/card.interface';

import {ForecastCardStyles} from './forecast-card.styles';

interface Props {
  forecast: ForecastItemInterface;
}

export const ForecastCard = ({forecast}: Props) => {
  const {dt, name, main, sys, clouds, wind, visibility} = forecast;

  const title = `${name}, ${sys.country}`;
  const today = getFormatedDate(dt);
  const sunrise = getFormatedDate(sys.sunrise);
  const sunset = getFormatedDate(sys.sunset);

  const renderFront = ({onFlip}: CardSideProps) => (
    <CardSide title={title} buttonText="Details" onPress={onFlip}>
      <Text style={ForecastCardStyles.text}>Date: {today}</Text>
      <Text style={ForecastCardStyles.text}>Temp: {main.temp}</Text>
      <Text style={ForecastCardStyles.text}>Feels like: {main.feels_like}</Text>
      <Text style={ForecastCardStyles.text}>
        Min / Max: {main.temp_min} / {main.temp_max}
      </Text>
      <Text style={ForecastCardStyles.text}>Pressure: {main.pressure}</Text>
    </CardSide>
  );
  const renderBack = ({onFlip}: CardSideProps) => (
    <CardSide title={title} buttonText="Main" onPress={onFlip}>
      <Text style={ForecastCardStyles.text}>Clouds: {clouds.all}%</Text>
      <Text style={ForecastCardStyles.text}>
        Sunrise / Sunset: {sunrise} / {sunset}
      </Text>
      <Text style={ForecastCardStyles.text}>Visibility: {visibility}</Text>
      <Text style={ForecastCardStyles.text}>Wind Deg: {wind.deg}</Text>
      <Text style={ForecastCardStyles.text}>Wind Speed: {wind.speed}</Text>
    </CardSide>
  );

  return <Card renderFront={renderFront} renderBack={renderBack} />;
};
