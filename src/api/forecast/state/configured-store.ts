import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, createStore, Reducer} from 'redux';
import {PersistConfig, persistReducer, persistStore} from 'redux-persist';
// @ts-ignore
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {combineEpics, createEpicMiddleware, Epic} from 'redux-observable';

import {rootReducer} from './root.reducer';
import {rootInitialState} from './initial-state/root.initial-state';
import {forecastEpic} from './epic/forecast.epic';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['forecast'],
  stateReconciler: autoMergeLevel2,
  timeout: 0,
};

declare const __DEV__: boolean;

const persistedReducer = persistReducer(persistConfig, rootReducer as Reducer);
const epicMiddleware = createEpicMiddleware();

const middlewares = [epicMiddleware];
if (__DEV__) {
  middlewares.push(require('redux-flipper').default());
}
const enhancers = applyMiddleware(...middlewares);

const store = createStore(
  persistedReducer,
  rootInitialState,
  composeWithDevTools(enhancers),
);
const persistor = persistStore(store);

const epics = [forecastEpic];
epicMiddleware.run(combineEpics(...(epics as Epic[])));

export const configuredStore = {
  store,
  persistor,
};
