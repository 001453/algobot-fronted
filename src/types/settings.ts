export interface ApiSettings {
  apiKey: string;
  apiSecret: string;
  exchange: string;
  testnet: boolean;
}

export interface TradingPreferences {
  autoTrade: boolean;
  maxPositions: number;
  riskLevel: 'low' | 'medium' | 'high';
  stopLoss: number;
  takeProfit: number;
  defaultLeverage: number;
  maxLeverage: number;
  preferredPairs: string[];
}

export interface NotificationSettings {
  emailAlerts: boolean;
  tradeAlerts: boolean;
  priceAlerts: boolean;
  email: string;
  pushNotifications: boolean;
  telegramAlerts: boolean;
  telegramChatId?: string;
}

export interface GeneralSettings {
  darkMode: boolean;
  language: string;
  timeZone: string;
  currency: string;
  dateFormat: string;
}

export interface SettingsState {
  api: ApiSettings;
  trading: TradingPreferences;
  notifications: NotificationSettings;
  general: GeneralSettings;
}