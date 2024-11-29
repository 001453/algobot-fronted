import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Interfaces
interface ApiSettings {
  apiKey: string;
  apiSecret: string;
  exchange: string;
  testnet: boolean;
}

interface TradingPreferences {
  autoTrade: boolean;
  maxPositions: number;
  riskLevel: 'low' | 'medium' | 'high';
  stopLoss: number;
  takeProfit: number;
  defaultLeverage: number;
  maxLeverage: number;
  preferredPairs: string[];
}

interface NotificationSettings {
  emailAlerts: boolean;
  tradeAlerts: boolean;
  priceAlerts: boolean;
  email: string;
  pushNotifications: boolean;
  telegramAlerts: boolean;
  telegramChatId?: string;
}

interface GeneralSettings {
  darkMode: boolean;
  language: string;
  timeZone: string;
  currency: string;
  dateFormat: string;
}

interface SettingsState {
  api: ApiSettings;
  trading: TradingPreferences;
  notifications: NotificationSettings;
  general: GeneralSettings;
}

// Initial state
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
    updateGeneralSettings: (state, action: PayloadAction<Partial<GeneralSettings>>) => {
      state.general = { ...state.general, ...action.payload };
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
  updateGeneralSettings,
  resetSettings
} = settingsSlice.actions;

// Reducer
export default settingsSlice.reducer;

// Selectors
export const selectApiSettings = (state: { settings: SettingsState }) => state.settings.api;
export const selectTradingPreferences = (state: { settings: SettingsState }) => state.settings.trading;
export const selectNotificationSettings = (state: { settings: SettingsState }) => state.settings.notifications;
export const selectGeneralSettings = (state: { settings: SettingsState }) => state.settings.general;