import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default localStorage
import { combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import cartReducer from './cartSlice';
import productReducer from './productSlice';

// Configure Persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'products'], // Which reducers to persist
};

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

// Persist the reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // Add any middlewares (optional)
});

export const persistor = persistStore(store);

export const wrapper = createWrapper(() => store);