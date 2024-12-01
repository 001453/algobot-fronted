export interface ApiSettings {
  apiKey: string;
  apiSecret: string;
  exchange: 'binance' | 'kucoin' | 'bybit';  // Specific exchange types
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
  telegramChatId: string | null;
}

export interface GeneralSettings {
  darkMode: boolean;
  language: 'en' | 'tr' | 'es' | 'de';  // Supported languages
  timeZone: string;
  currency: 'USD' | 'EUR' | 'TRY' | 'BTC';  // Supported currencies
  dateFormat: 'YYYY-MM-DD' | 'DD-MM-YYYY' | 'MM-DD-YYYY';  // Common date formats
}

export interface SettingsState {
  api: ApiSettings;
  trading: TradingPreferences;
  notifications: NotificationSettings;
  general: GeneralSettings;
}

// Validation types
export type ValidationResult = {
  isValid: boolean;
  errors?: string[];
};

// Action types
export type SettingsAction = {
  type: string;
  payload: Partial<SettingsState>;
};
