export interface Position {
    id: number;
    pair: string;
    entryPrice: string;
    currentPrice: string;
    profit: string;
    amount: string;
  }
  
  export interface TradingPreferences {
    autoTrade: boolean;
    maxPositions: number;
    riskLevel: 'low' | 'medium' | 'high';
    stopLoss: number;
    takeProfit: number;
  }
  
  export interface NotificationSettings {
    emailAlerts: boolean;
    tradeAlerts: boolean;
    priceAlerts: boolean;
    email: string;
  }
  
  export type NotificationSettingsType = NotificationSettings;