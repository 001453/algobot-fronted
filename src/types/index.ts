// Trading Types
export interface Position {
  id: number;
  pair: string;
  entryPrice: string;
  currentPrice: string;
  profit: string;
  amount: string;
  type: 'long' | 'short';
  leverage?: number;
  openTime: Date;
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

// Notification Types
export interface NotificationSettings {
  emailAlerts: boolean;
  tradeAlerts: boolean;
  priceAlerts: boolean;
  email: string;
  pushNotifications: boolean;
  telegramAlerts: boolean;
  telegramChatId?: string;
}

export type NotificationSettingsType = NotificationSettings;

// General Settings Types
export interface GeneralSettings {
  darkMode: boolean;
  language: string;
  timeZone: string;
  currency: string;
  dateFormat: string;
}

// API Types
export interface ApiSettings {
  apiKey: string;
  apiSecret: string;
  exchange: string;
  testnet: boolean;
}

// User Types
export interface UserProfile {
  username: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  lastLogin: Date;
}

// Root State Type
export interface SettingsState {
  general: GeneralSettings;
  api: ApiSettings;
  trading: TradingPreferences;
  notifications: NotificationSettings;
}
