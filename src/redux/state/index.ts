import {configureStore, combineReducers} from '@reduxjs/toolkit';

import {persistStore} from 'redux-persist';

import productReducer from './ProductReducer';

const rootReducer = combineReducers({
  product: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export const persistor = persistStore(store);

export default store;
