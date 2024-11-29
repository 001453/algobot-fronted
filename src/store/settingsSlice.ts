import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Interfaces
interface ApiSettings {
  apiKey: string;
  apiSecret: string;
}

interface TradingPreferences {
  autoTrade: boolean;
  maxPositions: number;
  riskLevel: 'low' | 'medium' | 'high';
  stopLoss: number;
  takeProfit: number;
}

interface NotificationSettings {
  emailAlerts: boolean;
  tradeAlerts: boolean;
  priceAlerts: boolean;
  email: string;
}

interface SettingsState {
  api: ApiSettings;
  trading: TradingPreferences;
  notifications: NotificationSettings;
}

// Initial state
const initialState: SettingsState = {
  api: {
    apiKey: '',
    apiSecret: '',
  },
  trading: {
    autoTrade: false,
    maxPositions: 5,
    riskLevel: 'medium',
    stopLoss: 2,
    takeProfit: 5,
  },
  notifications: {
    emailAlerts: true,
    tradeAlerts: true,
    priceAlerts: false,
    email: '',
  },
};

// Slice
export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateApiSettings: (state, action: PayloadAction<Partial<ApiSettings>>) => {
      state.api = { ...state.api, ...action.payload };
    },
    updateTradingPreferences: (state, action: PayloadAction<Partial<TradingPreferences>>) => {
      state.trading = { ...state.trading, ...action.payload };
    },
    updateNotificationSettings: (state, action: PayloadAction<Partial<NotificationSettings>>) => {
      state.notifications = { ...state.notifications, ...action.payload };
    },
    resetSettings: (state) => {
      return initialState;
    },
  },
});

// Actions
export const {
  updateApiSettings,
  updateTradingPreferences,
  updateNotificationSettings,
  resetSettings
} = settingsSlice.actions;

// Reducer
export default settingsSlice.reducer;

// Selectors
export const selectApiSettings = (state: { settings: SettingsState }) => state.settings.api;
export const selectTradingPreferences = (state: { settings: SettingsState }) => state.settings.trading;
export const selectNotificationSettings = (state: { settings: SettingsState }) => state.settings.notifications;