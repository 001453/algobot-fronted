export interface Position {
  id: number;
  pair: string;
  entryPrice: string;
  currentPrice: string;
  profit: string;
  amount: string;
}

export interface GeneralSettings {
  darkMode: boolean;
  language: string;
  timeZone: string;
  currency: string;
  dateFormat: string;
}