import React, {FC} from 'react';
import {SafeAreaView, ScrollView, StyleProp, ViewStyle} from 'react-native';

import {ScreenViewStyles} from './screen-view.styles';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const ScreenView: FC<Props> = ({children, style}) => (
  <SafeAreaView style={ScreenViewStyles.root}>
    <ScrollView style={[ScreenViewStyles.root, style]}>{children}</ScrollView>
  </SafeAreaView>
);
