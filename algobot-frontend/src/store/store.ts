import { configureStore } from '@reduxjs/toolkit';
import tradingReducer from './tradingSlice';
import settingsReducer from './settingsSlice';

export const store = configureStore({
  reducer: {
    trading: tradingReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
