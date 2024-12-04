export type PositionType = 'long' | 'short';

export interface Position {
  id: number;
  pair: string;
  entryPrice: string;
  currentPrice: string;
  profit: string;
  amount: string;
  openTime: Date;
  leverage: number;
  type: PositionType;
}

export interface GeneralSettings {
  darkMode: boolean;
  language: string;
  timeZone: string;
  currency: string;
  dateFormat: string;
}
