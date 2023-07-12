import {
  compose,
  createStore,
  applyMiddleware,
  Middleware,
  AnyAction,
} from 'redux';
import {persistReducer, PersistConfig, persistStore} from 'redux-persist';
import thunk, {ThunkDispatch} from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {rootReducer} from './root-reducer';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

export type RootState = ReturnType<typeof rootReducer>;

type persistConfigType = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};
const persistConfig: persistConfigType = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['news'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(thunk)),
);

// export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;

// export const store = compose(applyMiddleware(thunk))(createStore)(
//   persistedReducer
// );

export const persistor = persistStore(store);
