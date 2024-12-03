import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { 
  ApiSettings, 
  TradingPreferences, 
  NotificationSettings, 
  GeneralSettings, 
  SettingsState,
  ValidationResult 
} from '../types/settings';

const validateApiSettings = (settings: Partial<ApiSettings>): ValidationResult => {
  const errors: string[] = [];
  
  if (!settings.apiKey) errors.push('API Key is required');
  if (!settings.apiSecret) errors.push('API Secret is required');
  if (!settings.exchange) errors.push('Exchange selection is required');

  return {
    isValid: errors.length === 0,
    errors
  };
};

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
    telegramChatId: null,
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
      const validation = validateApiSettings(action.payload);
      if (validation.isValid) {
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
    bulkUpdateSettings: (state, action: PayloadAction<Partial<SettingsState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  updateApiSettings,
  updateTradingPreferences,
  updateNotificationSettings,
  updateGeneralSettings,
  resetSettings,
  bulkUpdateSettings
} = settingsSlice.actions;

// Selectors with proper type definitions
export const selectApiSettings = (state: { settings: SettingsState }): ApiSettings => state.settings.api;
export const selectTradingPreferences = (state: { settings: SettingsState }): TradingPreferences => state.settings.trading;
export const selectNotificationSettings = (state: { settings: SettingsState }): NotificationSettings => state.settings.notifications;
export const selectGeneralSettings = (state: { settings: SettingsState }): GeneralSettings => state.settings.general;

export default settingsSlice.reducer;
