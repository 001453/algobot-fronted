import { combineReducers } from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice';
// Diğer reducer'ları da import edin

const rootReducer = combineReducers({
  settings: settingsReducer,
  // Diğer reducer'ları da ekleyin
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;