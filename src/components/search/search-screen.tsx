import { ScreenView } from 'components/shared/component/screen-view/screen-view';
import React from 'react';

import { SearchForm } from './search-form/search-form';
import { SearchResult } from './search-result/search-result';
import { SearchScreenStyles } from './search-screen.styles';

export const SearchScreen = () => (
  <ScreenView style={SearchScreenStyles.root}>
    <SearchForm />
    <SearchResult />
  </ScreenView>
);
