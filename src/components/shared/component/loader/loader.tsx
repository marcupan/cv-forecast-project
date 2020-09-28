import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';

import {LoaderStyles} from './loader.styles';

interface Props {
  isLoading: boolean;
}

export const Loader: FC<Props> = ({isLoading, children}) =>
  isLoading ? (
    <View style={LoaderStyles.root}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  ) : (
    <>{children}</>
  );
