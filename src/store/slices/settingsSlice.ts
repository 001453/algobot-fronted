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

// Rest of your existing code...
