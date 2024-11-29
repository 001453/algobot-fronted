export interface Position {
  id: number;
  pair: string;
  entryPrice: string;
  currentPrice: string;
  profit: string;
  amount: string;
  type: 'long' | 'short';  // Pozisyon türü
  leverage?: number;  // Kaldıraç (opsiyonel)
  openTime: Date;  // Pozisyonun açılış zamanı
}

export interface TradingPreferences {
  autoTrade: boolean;
  maxPositions: number;
  riskLevel: 'low' | 'medium' | 'high';
  stopLoss: number;
  takeProfit: number;
  defaultLeverage: number;  // Varsayılan kaldıraç
  maxLeverage: number;  // İzin verilen maksimum kaldıraç
  preferredPairs: string[];  // Tercih edilen trading çiftleri
}

export interface NotificationSettings {
  emailAlerts: boolean;
  tradeAlerts: boolean;
  priceAlerts: boolean;
  email: string;
  pushNotifications: boolean;  // Mobil push bildirimleri
  telegramAlerts: boolean;  // Telegram bildirimleri
  telegramChatId?: string;  // Telegram Chat ID (opsiyonel)
}

export type NotificationSettingsType = NotificationSettings;

export interface GeneralSettings {
  darkMode: boolean;
  language: string;
  timeZone: string;
  currency: string;  // Tercih edilen para birimi
  dateFormat: string;  // Tarih formatı
}

export interface ApiSettings {
  apiKey: string;
  apiSecret: string;
  exchange: string;  // Kullanılan borsa (örn. 'binance', 'ftx')
  testnet: boolean;  // Test ağı kullanımı
}

export interface UserProfile {
  username: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  lastLogin: Date;
}

export interface SettingsState {
  general: GeneralSettings;
  api: ApiSettings;
  trading: TradingPreferences;
  notifications: NotificationSettings;
}