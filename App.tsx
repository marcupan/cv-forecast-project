import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PersistGate} from 'redux-persist/integration/react';

import {configuredStore} from 'api/forecast/state/configured-store';
import {ForecastScreen} from 'components/forecast/component/forecast-screen';
import {SearchScreen} from 'components/search/search-screen';
import {RoutesEnum} from 'components/shared/enum/route.enum';

const Stack = createStackNavigator();

const App = () => (
  <Provider store={configuredStore.store}>
    <PersistGate persistor={configuredStore.persistor}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={RoutesEnum.ForecastScreen}>
          <Stack.Screen name={RoutesEnum.ForecastScreen} component={ForecastScreen} />
          <Stack.Screen name={RoutesEnum.SearchScreen} component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
