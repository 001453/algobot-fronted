import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  api: {
    apiKey: string;
    apiSecret: string;
    exchange: string;
    testnet: boolean;
  };
  trading: {
    autoTrade: boolean;
    maxPositions: number;
    riskLevel: 'low' | 'medium' | 'high';
    stopLoss: number;
    takeProfit: number;
    defaultLeverage: number;
    maxLeverage: number;
    preferredPairs: string[];
  };
  notifications: {
    emailAlerts: boolean;
    tradeAlerts: boolean;
    priceAlerts: boolean;
    email: string;
    pushNotifications: boolean;
    telegramAlerts: boolean;
    telegramChatId: string;
  };
  general: {
    darkMode: boolean;
    language: string;
    timeZone: string;
    currency: string;
    dateFormat: string;
  };
}

const initialState: SettingsState = {
  api: {
    apiKey: '',
    apiSecret: '',
    exchange: 'binance',
    testnet: true,
  },
  trading: {
    autoTrade: false,
    maxPositions: 3,
    riskLevel: 'medium',
    stopLoss: 5,
    takeProfit: 10,
    defaultLeverage: 1,
    maxLeverage: 20,
    preferredPairs: [],
  },
  notifications: {
    emailAlerts: false,
    tradeAlerts: true,
    priceAlerts: true,
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

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateApiSettings: (state, action: PayloadAction<Partial<SettingsState['api']>>) => {
      state.api = { ...state.api, ...action.payload };
    },
    updateTradingSettings: (state, action: PayloadAction<Partial<SettingsState['trading']>>) => {
      state.trading = { ...state.trading, ...action.payload };
    },
    updateNotificationSettings: (state, action: PayloadAction<Partial<SettingsState['notifications']>>) => {
      state.notifications = { ...state.notifications, ...action.payload };
    },
    updateGeneralSettings: (state, action: PayloadAction<Partial<SettingsState['general']>>) => {
      state.general = { ...state.general, ...action.payload };
    },
  },
});

export const {
  updateApiSettings,
  updateTradingSettings,
  updateNotificationSettings,
  updateGeneralSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;
