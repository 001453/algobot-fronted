import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateApiSettings: (state, action: PayloadAction<ApiSettings>) => {
      state.api = action.payload;
    },
    updateTradingPreferences: (state, action: PayloadAction<TradingPreferences>) => {
      state.trading = action.payload;
    },
    updateNotificationSettings: (state, action: PayloadAction<NotificationSettings>) => {
      state.notifications = action.payload;
    },
  },
});

export const { updateApiSettings, updateTradingPreferences, updateNotificationSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
