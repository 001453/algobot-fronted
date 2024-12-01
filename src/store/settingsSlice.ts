import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Keeping your existing interfaces
// Adding new validation helpers
const validateApiSettings = (settings: Partial<ApiSettings>): boolean => {
  return !!(settings.apiKey && settings.apiSecret);
};

// Enhanced initial state with validation
const initialState: SettingsState = {
  api: {
    apiKey: '',
    apiSecret: '',
    exchange: 'binance',
    testnet: false,
  },
  trading: {
    autoTrade: false,
    maxPositions: 5,
    riskLevel: 'medium',
    stopLoss: 2,
    takeProfit: 5,
    defaultLeverage: 1,
    maxLeverage: 100,
    preferredPairs: ['BTCUSDT', 'ETHUSDT'],
  },
  notifications: {
    emailAlerts: true,
    tradeAlerts: true,
    priceAlerts: false,
    email: '',
    pushNotifications: false,
    telegramAlerts: false,
    telegramChatId: '',
  },
  general: {
    darkMode: false,
    language: 'en',
    timeZone: 'UTC',
    currency: 'USD',
    dateFormat: 'YYYY-MM-DD',
  },
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateApiSettings: (state, action: PayloadAction<Partial<ApiSettings>>) => {
      if (validateApiSettings(action.payload)) {
        state.api = { ...state.api, ...action.payload };
      }
    },
    updateTradingPreferences: (state, action: PayloadAction<Partial<TradingPreferences>>) => {
      state.trading = { ...state.trading, ...action.payload };
    },
    updateNotificationSettings: (state, action: PayloadAction<Partial<NotificationSettings>>) => {
      state.notifications = { ...state.notifications, ...action.payload };
    },
    updateGeneralSettings: (state, action: PayloadAction<Partial<GeneralSettings>>) => {
      state.general = { ...state.general, ...action.payload };
    },
    resetSettings: () => initialState,
    
    // New reducer for bulk updates
    bulkUpdateSettings: (state, action: PayloadAction<Partial<SettingsState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

// Exporting actions
export const {
  updateApiSettings,
  updateTradingPreferences,
  updateNotificationSettings,
  updateGeneralSettings,
  resetSettings,
  bulkUpdateSettings
} = settingsSlice.actions;

// Enhanced selectors with memoization
export const selectApiSettings = (state: { settings: SettingsState }) => state.settings.api;
export const selectTradingPreferences = (state: { settings: SettingsState }) => state.settings.trading;
export const selectNotificationSettings = (state: { settings: SettingsState }) => state.settings.notifications;
export const selectGeneralSettings = (state: { settings: SettingsState }) => state.settings.general;

export default settingsSlice.reducer;
