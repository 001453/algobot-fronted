import { combineReducers } from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice';
import tradingReducer from './tradingSlice';

const rootReducer = combineReducers({
  settings: settingsReducer,
  trading: tradingReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
