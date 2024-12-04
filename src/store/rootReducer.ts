import { combineReducers } from '@reduxjs/toolkit';
import settingsReducer from './slices/settingsSlice';
import tradingReducer from './slices/tradingSlice';
import portfolioReducer from './slices/portfolioSlice';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
  settings: settingsReducer,
  trading: tradingReducer,
  portfolio: portfolioReducer,
  auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;

// Root state selectors
export const selectRoot = (state: RootState) => state;
export const selectSettings = (state: RootState) => state.settings;
export const selectTrading = (state: RootState) => state.trading;
export const selectPortfolio = (state: RootState) => state.portfolio;
export const selectAuth = (state: RootState) => state.auth;

export default rootReducer;
