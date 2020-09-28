import {
  foreacastItemLoadAction,
  forecastItemClearAction,
} from 'api/forecast/state/action/forecast.action';
import {isTextStr} from 'components/shared/util/text.util';
import React, {useState} from 'react';
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {SearchFormStyles} from './search-form.styles';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const [cityText, setCityText] = useState('London');

  const buttonStyles = [
    SearchFormStyles.button,
    isTextStr(cityText) && SearchFormStyles.buttonEnabled,
  ];

  const handleChange = ({
    nativeEvent: {text},
  }: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setCityText(text);
    !isTextStr(text) && dispatch(forecastItemClearAction());
  };
  const handlePress = () => dispatch(foreacastItemLoadAction(cityText));

  return (
    <>
      <TextInput
        value={cityText}
        autoCapitalize="words"
        autoFocus={true}
        clearButtonMode="unless-editing"
        placeholder="City"
        onChange={handleChange}
        style={SearchFormStyles.input}
      />
      <TouchableOpacity
        disabled={!isTextStr(cityText)}
        onPress={handlePress}
        style={buttonStyles}>
        <Text style={SearchFormStyles.text}>Show city forecast</Text>
      </TouchableOpacity>
    </>
  );
};
